import { LightningElement, wire } from 'lwc';
import createNoteRecord from '@salesforce/apex/NoteTakingController.createNoteRecord';
import getNotes from '@salesforce/apex/NoteTakingController.getNotes';
import updateNoteRecord from '@salesforce/apex/NoteTakingController.updateNoteRecord';
import {refreshApex} from '@salesforce/apex'
import LightningConfirm from 'lightning/confirm';
import deleteNote from '@salesforce/apex/NoteTakingController.deleteNote';

const DEFAULT_NOTE_FORM = {
    Name:"",
    Note_Description__c:""
}

export default class NoteTakingApp extends LightningElement {
    showModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    noteList=[];
    selectRecordId;
    wiredNoteResult;
    createNoteHandler(){
        this.showModal = true;
    }
    closeModalHandler(){
        this.showModal = false;
        this.noteRecord = DEFAULT_NOTE_FORM;
        this.selectRecordId = null;
    }
    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'clean',
        'table',
        'header',
        'color',
    ];
    get isFormInvalid(){
        return !(this.noteRecord && this.noteRecord.Note_Description__c && this.noteRecord.Name);
    }
    get getModalName(){
        return this.selectRecordId ? "Update Note":"Add Note";
    }

    @wire(getNotes)
    noteListInfo(result){
        this.wiredNoteResult = result;
        const{data,error} = result
        if(data){
            console.log('data of notes', JSON.stringify(data));
            this.noteList = data.map(item=>{
                let formattedDate = new Date(item.LastModifiedDate).toDateString();
                return{...item,formattedDate};
            } )
        }
        if(error){
            console.error('error in Fetching data', error);
            this.showToastMessage(error.message.body,'error');
        }
    }
    
    changeHandler(event){
        const {name, value} = event.target
        // const name = event.target.name
        // const value = event.target.value
        this.noteRecord={...this.noteRecord, [name]:value}
    }
    formSubmitHandler(event){
        event.preventDefault();
        if(this.selectRecordId){
            this.updateNote(this.selectRecordId);
        }
        else{
            this.createNote();
        }
        // console.log("this.noteRecord", JSON.stringify(this.noteRecord))
    }

    createNote(){
        createNoteRecord({title: this.noteRecord.Name, description: this.noteRecord.Note_Description__c}).then(()=>{
            this.showModal = false;
            this.selectRecordId = null;
            this.showToastMessage("Note Created Successfully", 'success');
            this.refresh();
        }).catch(error=>{
            console.error("error",error.message.body);
            this.showToastMessage(error.message.body, 'error');
        })
    }
    showToastMessage(message,variant){
        const elem = this.template.querySelector('c-notification');
        if(elem){
            elem.showToast(message, variant);
        }
    }
    editNoteHandler(event){
        //whenever we assign something to data-XYZ we can get those value by dataset
        const{recordid}= event.target.dataset;
        const noteRecord = this.noteList.find(item => item.Id === recordid);
        this.noteRecord = {
            Name:noteRecord.Name,
            Note_Description__c: noteRecord.Note_Description__c
        }
        this.selectRecordId = recordid;
        this.showModal = true;
    }

    updateNote(noteId){
        const{Name, Note_Description__c} = this.noteRecord;
        updateNoteRecord({"noteId":noteId,"title":Name,"description":Note_Description__c}).then(()=>{
            this.showModal = false;
            this.selectRecordId = null;
            this.showToastMessage("Note Update Succesfully", 'success');
            this.refresh();
            
        })
        .catch(error=>{
            console.error("error in updating", error);
            this.showToastMessage(error.message.body, 'error');
        })
    }
    refresh(){
        return refreshApex(this.wiredNoteResult);
    }

    deleteNoteHandler(event){
        this.selectRecordId = event.target.dataset.recordid;
        this.handleConfirm();
    }
    async handleConfirm(){
        
       const result = await LightningConfirm.open({
            message:"Are you sure you want to delete this note?",
            variant:'headerless',
            label:'Delete Confirmation'
        })
        //we can use then as well if we haven't used await
        if(result){
            this.deleteHandler();
        }
        else{
            this.selectRecordId = null;
        }
    }
    deleteHandler(){
        deleteNote({noteId: this.selectRecordId}).then(()=>{
            this.showModal = false;
            this.selectRecordId = null;
            this.showToastMessage("Note Delete Successfully", 'success');
            this.refresh()
        })
        .catch(error=>{
            console.error("Error in deleting Note", error);
            this.showToastMessage(error.message.body, 'error');
        })
    }

}