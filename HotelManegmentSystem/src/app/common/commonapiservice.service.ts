import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonapiserviceService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  postapicall(endpoint: string, formdata: any) {
    let url = this.url + endpoint;
    return this.http.post(url, formdata);
  }
 
  getapicall(endpoint: string) {
    let url = this.url + endpoint;
    return this.http.get(url);
  }
  deleteApiCall(endPoint: string, id: number) {
    let url = this.url + endPoint + '/' + id;
    return this.http.delete(url);
  }
}
