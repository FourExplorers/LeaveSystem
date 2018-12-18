import { Injectable } from '@angular/core';
import { Http,Headers,Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { User} from '../domain/user'
import { ApiService } from './api.service';
@Injectable()
export class UserService {
  private api_url : string ;
  private headers : Headers ;
  constructor(private http: Http, private apiService: ApiService) {
      this.api_url = apiService.getUrl() + '/users';
      this.headers = apiService.getHeaders();
   }
  getUsers(): Promise<User[]>{
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as User[])
      .catch(this.handleError);
  }
  getUserByUsername(username: string): Promise<User> {
    console.log(username);
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => {
        let users = res.json() as User[];
        return (users.length > 0) ? users[0] : null;
      })
      .catch(this.handleError);
  }
  createUser(user: User): Promise<User> {
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res =>{res.json() as User
      return true})
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  
  
}
