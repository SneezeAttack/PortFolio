import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "assets/tmp.json";
 
  constructor(private http: HttpClient) { }

  getData(): Observable<Media[]> {

    let tmp = this.http.get<Media[]>(this.url);//.pipe(catchError(this.handleError));

    //tmp.subscribe(data => console.log("Service: " + data));

    return tmp;
  }
}
