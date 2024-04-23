import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    counter = 0;

    handleAdd(){
        this.counter++;
    }
    handleSub(){
        this.counter--;
    }
    handleMultiply(event){
        // To get details passed in the custom event 
        const x = event.detail;
        this.counter = this.counter*x;
    }
}