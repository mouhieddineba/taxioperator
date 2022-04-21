import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getAPIData(){
    return this.http.get('https://61161ff58f38520017a386e7.mockapi.io/api/v1/customer');
  }

  getCabData(){
    return this.http.get('https://61161ff58f38520017a386e7.mockapi.io/api/v1/cab')
  }
}
