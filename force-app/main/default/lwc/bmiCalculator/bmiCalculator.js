import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = '';
    weight = '';
    bmiValue = '';
    result = '';
    inputHandler(event){
        const name= event.target.name;
        const value= event.target.value;

        if(name === 'height'){
            this.height = value;
        }
        if(name === 'weight'){
            this.weight = value;
        }
    }
    submitHandler(event){
        //this will prevent the page to refresh
        event.preventDefault();

        console.log(this.height);
        console.log(this.weight);
        this.calculate();
    }

    calculate(){
        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/ (height*height);
        this.bmiValue = Number(bmi.toFixed(2));
        if(this.bmiValue<18.5){
            this.result = "UnderWeight";
        }
        else if(this.bmiValue>=18.5 && this.bmiValue<25){
            this.result = "Healty";
        }
        else if(this.bmiValue>=25 && this.bmiValue<30){
            this.result = "Overweight";
        }
        else{
            this.result = "Obese";
        }
    }
    reCalulate(){
        this.height = '';
        this.weight = '';
        this.bmiValue = '';
        this.result = '';
    }
}