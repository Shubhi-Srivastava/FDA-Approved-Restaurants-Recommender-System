import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.user="anagha123@gmail.com"){
      this.router.navigate(['/inspector-landing'])
    }else{
      this.router.navigate(['/user-landing'])
    }
  }
}
