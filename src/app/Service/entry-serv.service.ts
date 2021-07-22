import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Entry } from '../Component/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryServService {
  url = 'https://localhost:44306/api'; 
  FileUrl = "http://localhost:53535/File/";
  constructor(private http:HttpClient ) { }

  UploadFile(val:any){
    return this.http.post(this.url+'/Entries/UploadFile',val);
  }

  createEntry(entry:Entry): Observable<Entry> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Entry>(this.url +'/Entries',  
    entry , httpOptions);  
  }  
}
