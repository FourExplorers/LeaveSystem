import { Component, OnInit } from '@angular/core';
import  { Ng2SmartTableModule}  from 'ng2-smart-table';
import { LocalDataSource} from 'ng2-smart-table';
import {Driver} from '../../driver/driver';
import {DriverService}  from '../../../service/driver.service'


@Component({
  selector: 'app-mdsearch',
  templateUrl: './mdsearch.component.html',
  styleUrls: ['./mdsearch.component.css']
})
export class MdsearchComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  drivers: Driver[];
  source : LocalDataSource;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },

    columns: {
      
       driverId: {
        title: '驾驶员编号',
        
      },
      fromtime: {
        title: '上班时间',
        filter: false
      },
      totime: {
        title: '下班时间',
        filter: false
      },
      workline: {
        title: '工作路线',
      
      }

    },
    attr: {
      class: 'table table-bordered'
    }
  };
  data: Driver[];
  ngOnInit() {
    console.log("init");
    this.driverService.getDrivers().then(dri => this.drivers=dri);
  }

  onSelect($event): void {
    console.log($event.target);
    
  }

  onSave($event): void{
    console.log($event.target);
    var l1:Driver = { id: 1,
      driverId: "1",
      fromtime: "hi",
      totime: "hi",
      workline: "jjkk"
    }
      console.log(l1);
    var l2 :Driver = { id: 1,
      driverId: "1",
      fromtime: "hi",
      totime: "hi",
      workline: "jjkk"
      };
      console.log(l1);
    var la:Driver[] = [] ;
    la.push(l1);
    la.push(l2);
    //  this.data = JSON.stringify(la);
    console.log(JSON.stringify(la));
    this.driverService.getDrivers().then(dri => this.drivers=dri);
    this.source = new LocalDataSource(this.drivers);
    // this.driverService.getDrivers.then(drivers => this.drivers = drivers);

  }

  onSearch( query: string = ''){
    this.source.setFilter([
      // fields we want to include in the search
      
      {
        field: 'driverId',
        search: query
      },
      {
        field: 'workline',
        search: query
      }
    ], false);
  }

}
