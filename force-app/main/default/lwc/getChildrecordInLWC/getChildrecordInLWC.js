import { api, LightningElement } from 'lwc';


const columns1 = [
    { label: "Oppty Id", fieldName:'Id'},
    { label: "Oppty Name", fieldName : "Name"}
]
const columns2 = [
    { label: "Contact Id", fieldName:'Id'},
    { label: "Contact Name", fieldName : "Name"}
]

export default class GetChildrecordInLWC extends LightningElement {
    @api buttonStatus = "Show"
    opptyData = [] // this array will store oppty 
    contactData = [] // this will store contact

    @api recordId;
    @api showData= false;

    columns1 = columns1;
    columns2 = columns2;
    handleClick(event){
        const status = event.target.label;
        if(status==="Show"){
            this.buttonStatus = "Hide";
            this.showData = true;
        }
        else if(status==="Hide"){
            this.buttonStatus="Show"
            this.showData= false;
        }
    }

}