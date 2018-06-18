import { Injectable, Inject } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CustomersService {
   private customers_api = "./server/routes/customers/customersApi";

   constructor(private http: HttpClient) { }

   getCompanies(): Observable<Customer[]> {
    console.log('foo')
       return this.http.get<Customer[]>('/customers/customers-info');
   }

   addCustomer(newCustomer){
       console.log(newCustomer)
       return this.http.post<Customer>('/customers/new', newCustomer);
  }

}

