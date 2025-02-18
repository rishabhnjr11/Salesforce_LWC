import { LightningElement,api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import Contact_Object from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {

    @api objectApiName = Contact_Object;

    contactId='Trest';
    FIRST_NAME = FirstName;
    LAST_NAME = LastName;
    EMAIL = Email;
    //this will not work because JS needs reference via 'this' keyword for variables
    // fields = [FIRST_NAME, LAST_NAME, EMAIL];
    //this will work=> 
    fields = [this.FIRST_NAME,this.LAST_NAME,this.EMAIL];

    handleSuccess(event){
        this.contactId = event.detail.id;
        this.dispatchEvent(new ShowToastEvent({
            title: "Contact Created",
            message: this.contactId,
            variant: "success"
        }));
    }
    
    // handleError(event){
    //     this.dispatchEvent(new ShowToastEvent({
    //         title: "Error",
    //         message: "Failed to create record",
    //         variant: "error"
    //     }));
    // }
}