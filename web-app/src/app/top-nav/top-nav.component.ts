import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  closeLogin() {
    let closeBtn = document.getElementById('closeLoginBtn');
    closeBtn.setAttribute("style", "display: none");

    let openLoginBtn = document.getElementById('openLoginBtn');
    openLoginBtn.setAttribute("style", "display: block");

    this.router.navigateByUrl("/home");
  }

  openLogin() {
    let openLoginBtn = document.getElementById('openLoginBtn');
    openLoginBtn.setAttribute("style", "display: none");

    let closeBtn = document.getElementById('closeLoginBtn');
    closeBtn.setAttribute("style", "display: block");

    this.router.navigateByUrl("/");
  }

  logout() {
    let logout = document.getElementById('logout');
    logout.setAttribute("style", "display: none");
    this.openLogin();
  }

}
