import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    handleAdd(){
        // This is to dispatch an Custom event 
        this.dispatchEvent(new CustomEvent('add'));
        // we need to handle this custom event where we are calling or using this child event
    }
    handleSubtract(){
        this.dispatchEvent(new CustomEvent('substract'));
    }
    handleMultiply(event){
        const valueForMultiply = event.target.value;
        // alert("valueForMultiply "+valueForMultiply)
        this.dispatchEvent(new CustomEvent('multiply',{
            detail: valueForMultiply
        }))
    }

}