import { Injectable } from '@angular/core';
import {line} from '../people/citizen/line'
import { Http, Headers } from '@angular/http';

import { ApiService } from './api.service';
import { stringify } from 'querystring';
// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getLineUrl() + '/line';
    this.headers = apiService.getHeaders();
}

  private api_url ;
  private headers ;


  getLines(): Promise<line[]> {
    const url = `${this.api_url}`;
    console.log(url);
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as line[])
        .catch(this.handleError);
}



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
}

}
