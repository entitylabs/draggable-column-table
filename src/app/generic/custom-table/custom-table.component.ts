import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  constructor() { }

  @ViewChild('grid', { static: false }) grid: jqxGridComponent;
  
  
  isHoverEnabled: boolean;

  @Input() selectedColumn: any;
  @Input() selectedColumnNumber:any;
  replacedColumnNumber:any;
  replacedColumn: any;

  @Output() columnOrderChangedEvent= new EventEmitter<any>();
  
  isColumnDragged:boolean;
  tempColumn: any;

  cellhover: any;
  columns= [
    { text: 'Id', datafield: 'id', width: '200' },
    { text: 'Age', datafield: 'age', width: '200' },
    { text: 'Name', datafield: 'name', width: '200' },
  ];

  source = new jqx.dataAdapter({
    localData: [
      { id: 1, name: 'Ryan', 'age': 10 },
      { id: 2, name: 'Bryan', 'age': 20 },
      { id: 3, name: 'Cane', 'age': 30 },
    ]
  });


  ngOnInit(): void {

  }

  onColumnHover(column: any,index:any) {

    console.log("called");
    console.log(column);
    console.log(index);
    console.log(this.selectedColumnNumber);
    console.log(this.selectedColumn);
    // console.log(column);
    this.replacedColumn = column;

    this.replacedColumnNumber=index;

    let columnTemp={...this.selectedColumn};

    this.columns[this.selectedColumnNumber]={...this.replacedColumn}
    this.columns[this.replacedColumnNumber]={...columnTemp}
    this.grid.refreshdata();
    this.columnOrderChangedEvent.emit(this.columns);
  }

  onColumnSelect(column: any,index:any) {

    this.selectedColumn = column;
    this.selectedColumnNumber=index;

  }

  onColumnReplace(column:any){


  }
}
