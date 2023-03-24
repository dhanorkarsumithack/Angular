import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent {
  selectedCustomer: any;

  customers:Customer[]=[
    {
      customerNo:1,
      name:'sumit dhanorkar',
      address:'at post dhanaj',
      city:'Amravati',
      country:'India'
    },
    {
      customerNo:2,
      name:'Shubham wankhede',
      address:'at post Umerkhed',
      city:'Yavatmad',
      country:'India'
    },
    {
      customerNo:3,
      name:'shreysh meshram',
      address:'at post chandrapur',
      city:'Chandrapur',
      country:'India'
    },
    {
      customerNo:4,
      name:'Niraj Tiwari',
      address:'at post yavatmad',
      city:'Yavatmad',
      country:'India'
    },
    {
      customerNo:5,
      name:'Sam sdfg',
      address:'karanja',
      city:'karanja',
      country:'India'
    }
  ]
}
