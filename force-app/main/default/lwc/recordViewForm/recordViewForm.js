import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_BILLINGCITY from '@salesforce/schema/Account.BillingCity';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';

export default class RecordViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    namefield = ACCOUNT_NAME;
    rishabh = "rishabh";
    BillingCity=ACCOUNT_BILLINGCITY;
    Phone = ACCOUNT_PHONE;
    //jab hme kabhi bhi recordId pass krna ya store krna hota hai to simply hm @api decorator
    // ke recordId use kr skte hai. Same hm objectApi name ke liye bhi use kr skte,eg: 
    // @api recordId;
    // @api objectApiName;


}