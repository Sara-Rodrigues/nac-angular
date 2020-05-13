import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  posts: []

  constructor(
    private myDataService :  MyDataService
  ) { }

  ngOnInit() {
    this.getData()

  }

 async getData() {
     let res = await this.myDataService.getData().toPromise()
     this.posts = res.data
  }


}
