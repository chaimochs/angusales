import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../customers.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerComponent implements OnInit {
  newCustomer = { 
    firstName: 'Richard', 
    lastName: 'Lionheart', 
    companyId: 4, 
    email: 'dick@uk.co.gov', 
    comments: "I dear say..."
};
  constructor(private customersService: CustomersService ) { }

  ngOnInit() {
  }

  addStuff(){
    this.customersService.addCustomer(this.newCustomer).subscribe(data => {
      console.log(data);
    });
  }

}

// {
//   customerId:req.body.customerId,
//   firstName:req.body.firstName,
//   lastName:req.body.lastName,
//   companyId:req.body.companyId,
//   email:req.body.email,
//   comments:req.body.comments
// }