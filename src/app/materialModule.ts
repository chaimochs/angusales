import { MatTableModule,  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatTableModule,  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule],
  exports: [MatTableModule,  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule],
})
export class MaterialModule { }