import { LightningElement,wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import { reduceErrors } from 'c/ldsUtils';


const columns=[
    {label:'First Name', fieldName: FirstName.fieldApiName},
    {label:'Last Name', fieldName: LastName.fieldApiName},
    {label:'Email', fieldName: Email.fieldApiName}
]


export default class ContactList extends LightningElement {
    data='';
    columns =columns;  


    @wire(getContacts)
    contacts

    get errors(){
        return (this.contacts.error)?
            reduceErrors(this.contacts.error):[]
    }


}