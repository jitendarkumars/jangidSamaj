import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/services/common.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  usersList;
  constructor(private common:CommonService) { }

  ngOnInit() {

    this.common.getHeadUsers().subscribe(res=>{
      console.log(res)
      this.usersList = res;
    })

  }

}
