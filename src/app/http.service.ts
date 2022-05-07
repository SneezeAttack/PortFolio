import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getURL: string = "http://localhost:80/portFolio/getSong.php";
  postURL: string = "http://localhost:80/PortFolio/addSong.php";
 
  constructor(private http: HttpClient) { }

  getData(): Observable<Media[]> {

    let tmp = this.http.get<Media[]>(this.getURL);

    return tmp;
  }

  sendData(formData: FormData): Observable<String>{


    return this.http.post<String>(this.postURL, formData);
  }

  sendTest(): Observable<JSON>{

    let tmp = { name: "Erik", age: "32" }

    return this.http.post<JSON>(this.postURL, tmp);
}
}
