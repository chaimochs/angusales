import { Component, OnInit } from '@angular/core';
import {CustomersService} from '../customers.service';
import { MaterialModule } from '../materialModule';
import { MatTableModule,  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../customer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  customers: Customer[];

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customersService.getCompanies().subscribe(data => {
      this.customers = data;
      console.log(this.customers);
    });
  }
}
