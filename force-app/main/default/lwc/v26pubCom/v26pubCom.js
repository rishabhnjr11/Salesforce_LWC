import { LightningElement,wire } from 'lwc';

//important to import below for LMS service
import { publish,MessageContext} from 'lightning/messageService';
import COUNTING_UPDATED_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class V26pubCom extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleIncrement(){
        const payload = {
            operator:'add',
            constant:1
        };
        publish(this.messageContext,COUNTING_UPDATED_CHANNEL,payload);
    }

    handleSubtract(){
        const payload = {
            operator:'subtract',
            constant:1
        };
        publish(this.messageContext,COUNTING_UPDATED_CHANNEL,payload);
    }

    handleMultiply(){
        const payload = {
            operator:'multiply',
            constant:2
        };
        publish(this.messageContext,COUNTING_UPDATED_CHANNEL,payload);
    }


}