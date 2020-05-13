import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  private apiUrl: string = "https://api-segundo-tinr.herokuapp.com/posts"


  constructor(
    private httpClient : HttpClient
  ) { }

  public getData() : Observable<any> {
    const result = this.httpClient.get(this.apiUrl)
    return result
  }

}
