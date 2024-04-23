import { api,LightningElement } from 'lwc';

export default class ParenttochildParent extends LightningElement {


    sData;
    texta;
    handleChange(event){
        this.texta = event.target.value;
        
    }
    sendData(){
        this.sData = this.texta;
    }
}