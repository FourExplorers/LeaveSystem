import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { MainComponent } from './first/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { InitComponent } from './first/init/init.component';
import { ApiService } from './service/api.service';
import { CoreModule } from './core/core.module';
import { NavbarComponent} from './navbar/navbar.component'
import { HomepageModule } from './homepage/homepage.module';
import { FormsModule} from '@angular/forms';
import { SearchNavBarComponent } from './people/search-nav-bar/search-nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component'
import { DsearchComponent } from './people/driver/dsearch/dsearch.component';
import { MdsearchComponent} from './people/manager/mdsearch/mdsearch.component';
import { BossComponent } from './people/boss/boss.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SearchComponent} from './people/citizen/search/search.component'
import { SearchMapComponent } from './people/citizen/search-map/search-map.component'
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InitComponent,
    NavbarComponent,
    RegisterComponent,
    ErrorComponent,
    DsearchComponent,
    BossComponent,
    MdsearchComponent,
    SearchNavBarComponent,
    SearchComponent,
    SearchMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomepageModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyAFgM81Qz-SwfTzUsr4F51AgDj0HdN88CQ' //Google API key for maps
       apiKey: 'AIzaSyDURIknn5X5lPJfiH55SbKm6WtPA7uGQvo'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
