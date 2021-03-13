import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: string;

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  onSubmit() {
    this.isLogin = "true";
    let openLoginBtn = document.getElementById('openLoginBtn');
    openLoginBtn.setAttribute("style", "display: none");

    let closeBtn = document.getElementById('closeLoginBtn');
    closeBtn.setAttribute("style", "display: none");

    let logout = document.getElementById('logout');
    logout.setAttribute("style", "display: block");
    this.router.navigateByUrl("/home");
  }

}
