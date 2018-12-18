import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
@Injectable()
export class ApiService {

  constructor() { }
  getUrl():string{
    return 'http://localhost:3000';
}
 getHeaders():Headers{
    return new Headers({'Content-Type':'application/json'});
 }
 getLineUrl(): string {
  return 'http://localhost:3002';
}

getDriverUrl(): string{
return 'http://localhost:3001';
}
}

