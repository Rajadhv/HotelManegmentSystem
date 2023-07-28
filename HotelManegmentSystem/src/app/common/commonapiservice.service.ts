import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonapiserviceService {
  url = 'http://localhost:3000/';
  user = 'http://localhost:3000/user';
  get: any;
  constructor(private http: HttpClient) {}
  postapicall(endpoint: string, formdata: any) {
    let url = this.url + endpoint;
    return this.http.post(url, formdata);
  }
  // getapicall(endpoint: string, formdata: any) {
  //   let url = this.url + endpoint;
  //   return this.http.get(url, formdata);
  // }
  getapicall(endpoint: any) {
    let url = this.url + endpoint;
  }
}
