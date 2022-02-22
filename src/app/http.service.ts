import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "/assets/fetchData.php";
  constructor(private http: HttpClient) { }

  getData(): Observable<Media[]> {

    return this.http.get<Media[]>(this.url);
  }

 
}


//, { sql: "SELECT * FROM mediacontent WHERE filetype=" + type }
