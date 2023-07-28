import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaltapiService {
  admin = 'http://localhost:3000/admin';
  user = 'http://localhost:3000/user';
  owener = 'http://localhost:3000/owener';
  url2 = 'http://localhost:3000/hotels';
  url3 = 'http://localhost:3000/bookings';
  constructor(private http: HttpClient) {}
  registerHotel(data: any) {
    return this.http.post(this.url2, data);
  }
  getHotelList() {
    return this.http.get(this.url2);
  }

  getusers() {
    return this.http.get(this.user);
  }
  registerAdmin(data: any) {
    return this.http.post(this.admin, data);
  }
  registerowener(data: any) {
    return this.http.post(this.owener, data);
  }

  getowener() {
    return this.http.get(this.owener);
  }
  getowenerByCode(id: any) {
    return this.http.get(this.owener + '/' + id);
  }

  postusers(data: any) {
    return this.http.post(this.user, data);
  }
  getuserByCode(id: any) {
    return this.http.get(this.user + '/' + id);
  }

  getAdminByCode(id: any) {
    return this.http.get(this.admin + '/' + id);
  }
}
