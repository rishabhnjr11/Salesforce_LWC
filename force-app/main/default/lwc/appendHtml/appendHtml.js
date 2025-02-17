import { LightningElement,api } from 'lwc';

export default class AppendHtml extends LightningElement {
    _result;
    loaded;
    @api
    get result(){
        return this._result;
    }
    set result(data){
        this._result = data;
        if(this.loaded){
            this.attachHtml();
        }
    }
    //if any property is updated then this callback is called
    renderedCallback(){
        if(this._result && !this.loaded){
            this.attachHtml();
        }
    }
    attachHtml(){
        const container = this.template.querySelector('.htmlcontainer');
        if(container){
            //getter can be called as property
            container.innerHTML = this.result;
            this.loaded = true;
        }
    }
}