import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './materialModule';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { TableComponent } from './table/table.component';
import { CommentsComponent } from './comments/comments.component';

import { MatTableModule,  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { CustomersService } from './customers.service';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    AddCompanyComponent,
    TableComponent,
    CommentsComponent,
    CustomerComponent,
    CompanyComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatTableModule,  
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
