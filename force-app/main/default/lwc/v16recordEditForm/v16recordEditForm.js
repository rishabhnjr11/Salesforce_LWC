import { LightningElement, api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_WEBSITE from '@salesforce/schema/Account.Website';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_DESCRIPTION from '@salesforce/schema/Account.Description';

export default class V16recordEditForm extends LightningElement {
    @api objectApiName=ACCOUNT_OBJECT;
    accountId= 'Will populate once account is created';
    nameField = ACCOUNT_NAME;
    websiteField = ACCOUNT_WEBSITE;
    phoneField = ACCOUNT_PHONE;
    descriptionField = ACCOUNT_DESCRIPTION;


    handleSuccess(event){
        this.accountId = event.detail.id;
        const events = new ShowToastEvent({
            title: "Successful",
            message: "Player Created",
            variant: "success"
        }); 
        this.dispatchEvent(events);
    }

    handleError(event){
        this.dispatchEvent(new ShowToastEvent({
            title: "Error",
            message: "Failed to create record",
            variant: "error"
        }));
    }
}
