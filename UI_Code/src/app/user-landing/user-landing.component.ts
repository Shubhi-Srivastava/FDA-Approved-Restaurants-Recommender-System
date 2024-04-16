import { Component, OnInit } from '@angular/core';
import { AppService } from '../api.service';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.scss']
})

export class UserLandingComponent implements OnInit {
  userData: any;
  searchtext:any;
  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.getUser().subscribe(
      response => {
        console.log(response);
        this.userData= response;
      }
    )
  }

}
