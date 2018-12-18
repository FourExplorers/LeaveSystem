import { Component, OnInit } from '@angular/core';
import {line} from '../line';
import {LineService} from '../../../service/line.service'
import  { Ng2SmartTableModule}  from 'ng2-smart-table';
import { LocalDataSource} from 'ng2-smart-table';



@Component({
  selector: 'app-search',
  // templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
   template: `
   <br>
   <button (click)="onSave($event)">查询公交信息</button>
   
   <br> 
   <input #search class="search" type="text" placeholder="Search..." (keydown.enter)="onSearch(search.value)">
   <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
    
   
   `
})
export class SearchComponent implements OnInit {

  constructor(private lineService: LineService) {
   
   }
  
  lines: line[] ;
  source: LocalDataSource ;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },

    columns: {
      
      lineId: {
        title: '路线号',
        filter: false
      },
      stations: {
        title: '包括站点',
        filter: false
      }
    },
    attr: {
      class: 'table table-bordered'
    }
  };

   data  = [{"id":1,"lineId":"1","stations":"hi"},{"id":1,"lineId":"1","stations":"hi"}];
  

  ngOnInit() {
    
    this.lineService.getLines().then(lines => this.lines = lines);
    
  }
  onSelect($event): void {
    console.log($event.target);
    
  }


  onSave($event): void{
    console.log($event.target);
    var l1:line = { id: 1,
      lineId: "1",
      stations: "hi"};
      console.log(l1);
    var l2 :line = { id: 1,
      lineId: "1",
      stations: "hi"};
      console.log(l1);
    var la:line[] = [] ;
    la.push(l1);
    la.push(l2);
    // this.data = JSON.stringify(la);
    console.log(JSON.stringify(la));
    this.source = new LocalDataSource(this.lines);
  }

  onSearch( query: string = ''){
    this.source.setFilter([
      // fields we want to include in the search
      
      {
        field: 'lineId',
        search: query
      },
      {
        field: 'stations',
        search: query
      }
    ], false);
  }

}
