import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/getAccountsforDataTableInLineEdit.getAccount';


//editable:true is used to make inline edit option true
const columns = [
    {label: 'Account Name', fieldName: 'Name', editable: true},
    {label: 'Website', fieldName: 'Website', editable: true},
    {label: 'Phone', fieldName: 'Phone', editable: true},
]


export default class LwcDatatablewithInlineEdit extends LightningElement {

    columns = columns;
    data = [];
    saveDraftValue = [];


    @wire(getAccount)
    accountData(result){
        if(result.data){
            this.data = result.data;
        }
        else{
            this.data = undefined;
        }
    }

    handleSave(event){
        //all updated fields are passed in draftValues along with key-field of datatable
        const updatedfield = event.detail.draftValues;

    }
}