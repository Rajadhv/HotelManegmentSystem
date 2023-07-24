import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HotelManegmentSystem';
  isLogin = 'main';
  constructor(private roiter: Router) {}
  ngDoCheck(): void {
    let login = this.roiter.url;
    console.log(login); //part of node
    if (
      login === '/admin/home' ||
      login === '/admin/owener' ||
      login === '/admin/hotel' ||
      login === '/admin/user'
    ) {
      this.isLogin = 'admin';
    } else if (login === '/owener/home') {
      this.isLogin = 'owener';
    } else if (login === '/user/home') {
      this.isLogin = 'user';
    } else {
      this.isLogin = 'main';
    }
  }
}
