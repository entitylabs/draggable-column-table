import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';


@NgModule({
  declarations: [CustomTableComponent],
  imports: [
    CommonModule,
    jqxGridModule
  ],

  exports: [CustomTableComponent]
})
export class GenericModule { }
