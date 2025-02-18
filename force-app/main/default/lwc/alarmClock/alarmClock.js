import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets';
import AlarmClockbg from '@salesforce/resourceUrl/AlarmClockGb';
export default class AlarmClockApp extends LightningElement {
  clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png';
  bgImage = AlarmClockbg;
  currentTime ='';
  hours=[];
  minutes=[];
  merdiems = ['AM','PM'];
  

  isAlarmSet = false;
  minutesSelected='';
  hourSelected='';
  merdiemSelected='';
  alarmTime;
  //getter is a property which always execute and we can call that proprety directly in HTML
  get isFieldNotSelected(){
    return !(this.hourSelected && this.merdiemSelected && this.minutesSelected);
  }
  connectedCallback(){
    this.currentTimeHandler();
    this.createHoursOptions();
    this.createMinutesOptions();
  }

  currentTimeHandler(){

  // The setInterval() method calls a function at specified intervals (in milliseconds).
  // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
  // 1 second = 1000 milliseconds.
    setInterval(()=>{
    // will you == let dateTime = new Date(); => JS 
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    let ampm = "AM";

    if(hour==0){
        hour = 12;
    }
    else if(hour===12){
        ampm="PM";
    }
    else if(hour>12){
        hour = hour-12;
        ampm="PM";
    }

    hour = hour<10 ? "0"+hour:hour;
    min = min<10 ? "0"+min:min;
    sec = sec<10 ? "0"+sec : sec;
    //backticks allow to append javascript variable with string =>Backticks (`) are used in JavaScript to create template literals. 
    //Template literals are a type of string literal that allow you to embed expressions directly within the string. 
    //This makes it easier to create complex strings, such as those that contain variables or dynamic data.
    //eg for backticks:const name = 'Sathira Nipun';
    // console.log(`Hi, ${name}!`); // Output: Hi, Sathira Nipun!   
    this.currentTime = `${hour}:${min}:${sec}  ${ampm}`;

    if(this.alarmTime === `${hour}:${min} ${ampm}`){
      console.log("Alarm Triggered");
    }

    },1000)
    // console.log(this.currentTime + " "+ this.hour+ this.min);
  }
  
  createHoursOptions(){
    for(let i=1;i<=12;i++){
        let val = i<10?"0"+i:i;
        this.hours.push(val);
    }
  }
  createMinutesOptions(){
    for(let i=0;i<=59;i++){
        let val = i<10?"0"+i:i;
        this.minutes.push(val);
    }
  }

  optionhandler(event){
    const{label, value} = event.detail;
    if(label==="Hour(s)"){
      this.hourSelected = value;
    }
    else if(label==="Minute(s)"){
      this.minutesSelected = value;
    }
    else if(label==="AM/PM"){
      this.merdiemSelected = value;
    }

  }

  setAlarm(){
    this.alarmTime = `${this.hourSelected}:${this.minutesSelected} ${this.merdiemSelected}`;
    // 9:30 PM
    this.isAlarmSet = true;
  }
  
  clearAlarm(){
    this.isAlarmSet = false;
    this.alarmTime = '';
    //we can acheive below functionality using public method/function
    // this.minutesSelected='';
    // this.hourSelected='';
    // this.merdiemSelected='';

    const elements = this.template.querySelectorAll('c-clock-dropdown');
    Array.from(elements).forEach(element=>{
      element.reset("");
    })
  }



}