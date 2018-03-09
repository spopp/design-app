import { Component, OnInit } from '@angular/core';

import {Http} from '@angular/http';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  spaceScreens: Array<any>;

  constructor(private http: Http) {
    this.http.get('./data.json')
      .map(response => response.json().screenshots)
      .subscribe(res => this.spaceScreens = res);
  }

  ngOnInit() {
  }

  likeMe(i) {
    if (this.spaceScreens[i].liked === 0) {
      this.spaceScreens[i].liked = 1;
    } else {
      this.spaceScreens[i].liked = 0;
    }
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }
}
