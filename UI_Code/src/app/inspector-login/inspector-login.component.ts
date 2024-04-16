import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../api.service';

@Component({
  selector: 'app-inspector-login',
  templateUrl: './inspector-login.component.html',
  styleUrls: ['./inspector-login.component.scss']
})
export class InspectorLoginComponent implements OnInit {

  inspectorData: any;
  searchtext:any;
  constructor(
    private httpClient: HttpClient,
    private appService:AppService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getInspectordata();
  }
  addNew(){
this.router.navigate(['edit-update'])
  }

  getInspectordata(){
    this.appService.getInspector().subscribe(
      response => {
        console.log(response);
        this.inspectorData= response;
      }
    )
  }
}
