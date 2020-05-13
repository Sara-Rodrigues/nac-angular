import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout-sidebar',
  templateUrl: './default-layout-sidebar.component.html',
  styleUrls: ['./default-layout-sidebar.component.scss']
})
export class DefaultLayoutSidebarComponent implements OnInit {


  public route1 : string = "/first-page"
  public route2 : string = "/second-page"


  constructor() { }

  ngOnInit() {
  }

}
