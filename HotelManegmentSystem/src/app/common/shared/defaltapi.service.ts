import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaltapiService {
  admin = 'http://localhost:3000/admin';
  users = 'http://localhost:3000/users';
  owener = 'http://localhost:3000/owener';
  url2 = 'http://localhost:3000/hotels';
  url3 = 'http://localhost:3000/bookings';
  constructor(private http: HttpClient) {}
  getusers() {
    return this.http.get(this.users);
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
    return this.http.post(this.users, data);
  }
  getuserByCode(id: any) {
    return this.http.get(this.users + '/' + id);
  }

  getAdminByCode(id: any) {
    return this.http.get(this.admin + '/' + id);
  }
}
