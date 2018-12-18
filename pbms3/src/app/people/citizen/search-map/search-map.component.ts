import { Component, OnInit } from '@angular/core';
import { AgmMap, AgmMarker } from '@agm/core';
@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})

// declare var  AMap: any;    // 一定要声明AMap，要不然报错找不到AMap

export class SearchMapComponent implements OnInit {
  lat: number = 39.1090299823;
  lng: number = 117.1729745409;
  
  constructor() { 
    
  }

  ngOnInit() {
  }

 
}
