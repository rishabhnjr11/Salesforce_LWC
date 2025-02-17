import { LightningElement, wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountWithContactSize.getAccountList';

const columns = [
    {label: "Account Name", fieldName: "AccountName"},
    {label: "Contact Count", fieldName: "ContactsCount"}
]

export default class AccountWithContactcount extends LightningElement {
    data=[];
    columns = columns;
    @wire(getAccountList)
    accountlist({data,error}){
        if(data){
            this.data = data;
        }
        else{

        }
    }
}
// const columns = [
//     { label: 'Account Name', fieldName: 'AccountName' },
//     { label: 'Contacts Count', fieldName: 'ContactsCount', type: 'number' }
// ];

// export default class AccountWithContacts extends LightningElement {
//     accounts;
//     columns = columns;

//     @wire(getAccountList)
//     wiredAccounts({ error, data }) {
//         if (data) {
//             this.accounts = data;
//         } else if (error) {
//             this.accounts = undefined;
//             console.error('Error fetching accounts:', error);
//         }
//     }
// }