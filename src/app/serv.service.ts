import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get('https://localhost:44306/api/AccountsCharts')
      .pipe( map((response:[]) => response.map(item => item['NameAR']))
      )
  }
  getNumData(){
    return this.http.get('https://localhost:44306/api/AccountsCharts')
      .pipe( map((response:[]) => response.map(item => item['Number']))
      )
  }
      
}
