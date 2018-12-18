import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent}      from './search.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent },
   
  ];
  
  @NgModule({
    imports: [ RouterModule.forChild(routes) ],  //注意此处是forChild
    exports: [ RouterModule ]
  })
  export class SearchRoutingModule {}