import { Injectable } from '@angular/core';
import { Driver} from '../people/driver/driver';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';
import { stringify } from 'querystring';




@Injectable()
export class DriverService {
  private api_url ;
  private headers ;

  constructor(private http: Http, private apiService: ApiService)
   {
    this.api_url = apiService.getDriverUrl() + '/driver';
    this.headers = apiService.getHeaders();
    }


    getDrivers(): Promise<Driver[]> {
      const url = `${this.api_url}`;
      console.log(url);
      console.log("are you ok");
      return this.http.get(url, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as Driver[])
          .catch(this.handleError);
  }

  DRIVERS : Driver[]=[{id: 1,
    driverId: "1",
    fromtime: "hi",
    totime: "hi",
    workline: "jjkk"}];
  
  // getDrivers():Promise<Driver[]>
  // {
  //   return Promise.resolve(this.DRIVERS);
  // }
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
  }
}
