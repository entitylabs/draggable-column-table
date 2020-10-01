import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  columns:any;


  ngOnInit(): void {

    this.columns = [
      { text: 'Id', datafield: 'id', width: '200' },
      { text: 'Age', datafield: 'age', width: '200' },
      { text: 'Name', datafield: 'name', width: '200' },
    ];
  }


  selectedColumn:any;
  selectedColumnNumber:any;
  
  title = 'draggable-column-table';


  onColumnSelect(column:any, index:any){

    this.selectedColumnNumber=index;
    this.selectedColumn=column;
  }

  onColumnOrderChange(columns:any){
    console.log(columns);
    this.columns=columns;
  }


}
