import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId:number;
  constructor(private router: Router) { }

  ngOnInit() {
    const divLogin = document.getElementById('Login');
    const divLogout = document.getElementById('Logout');
    this.userId = -1;
    if(localStorage.getItem('userId') !== null){
     //已登录
     //divLogin.style.display = 'none';

     this.userId = <number><any>localStorage.getItem('userId');

    }
    else{
      //未登录
      divLogout.style.display = 'none';
    }
    if(divLogout.style.display==='none')
    {
      this.router.navigate([""]);
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.userId = -1;
    location.reload();
  }
}
  
