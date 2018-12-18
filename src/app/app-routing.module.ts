import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from'./register/register.component';
import { MainComponent }      from './first/main/main.component';
import { InitComponent}       from './first/init/init.component';
import { AuthGuardService}    from './service/auth-guard.service';
import { SearchNavBarComponent } from './people/search-nav-bar/search-nav-bar.component';
import { MdsearchComponent} from './people/manager/mdsearch/mdsearch.component';
import { BossComponent } from './people/boss/boss.component';
import { ErrorComponent} from './error/error.component'
import { DsearchComponent} from './people/driver/dsearch/dsearch.component'
import { SearchComponent} from './people/citizen/search/search.component'
import { SearchMapComponent } from './people/citizen/search-map/search-map.component'
const routes: Routes = [
  {
     path: '',component: SearchNavBarComponent 
  },
  {
     path:'homepage',
     canActivate: [AuthGuardService],
     loadChildren:'./homepage/homepage.module#HomepageModule'      
  },
  {
   path:'register',component:RegisterComponent
 },
 {
   path:'login',component:RegisterComponent
 },
 {
    path:'driver',component:DsearchComponent
 },
 {
   path:'manager',
   component:MdsearchComponent,
 },
 {
    path:'boss',
    component:BossComponent,
 },
 {
   path:'error',
   component:ErrorComponent,
 },
 {
  path: 'search', component: SearchComponent
 },
 {
  path:'search1',component:SearchMapComponent
 }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
