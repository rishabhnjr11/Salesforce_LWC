import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class V29lwcNavigation extends NavigationMixin(LightningElement) {

    //object Page -> account,Contact
    //1--> Navigate to Lightning page Tab
    //As of Now we don't have Player_Explorer 
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__navItemPage',
    //         attributes: {
    //             apiName: 'Player_Explorer'
    //         }
    //     })
    // }

    //2--> Navigate to Object Page
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Account',
    //             actionName: 'home',
    //         }
    //     })
    // }

    //3--> Navigate to Object Page to any specific view eg-> recently viewed, All record
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Account',
    //             actionName: 'list',
    //         },
    //         state:{
    //             // filterName: 'Recent'
    //             // Pass specific id of list view to navigate to specific view
    //             filterName: '00B5h00000czxLjEAI'
    //         }
    //     })
    // }

    //4--> Create new Account record modal(sub window)
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__objectPage',
    //         attributes: {
    //             objectApiName: 'Account',
    //             actionName: 'new',
    //         }
    //     })
    // }

    //5--> Open any specific record
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: '0015h00001ZxKfIAAV',
    //             objectApiName: 'Account',
    //             actionName: 'view',
    //         }
    //     })
    // }

    //6--> Open any specific record in edit mode
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__recordPage',
    //         attributes: {
    //             recordId: '0015h00001ZxKfIAAV',
    //             objectApiName: 'Account',
    //             actionName: 'edit',
    //         }
    //     })
    // }

    //7--> Navigate outside Salesforce
    // handleClick(){
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__webPage',
    //         attributes: {
    //             url: 'https://google.com'
    //         }
    //     })
    // }

    //8--> Open one or more file 
    handleClick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'filePreview'
            },
            state:{
                recordIds: '0695h00000PdtQpAAJ,0695h00000PdtQkAAJ',
                selectedRecordId: '0695h00000PdtQkAAJ'
            }
        })
    }


}