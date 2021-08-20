import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Media } from './media';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "https://wtfamisupposedtodohere.000webhostapp.com/index.php";
  constructor(private http: HttpClient) { }

  getData(): Observable<Media> {

    return this.http.get<Media>("/assets/temp.json");

  }

 
}


//, { sql: "SELECT * FROM mediacontent WHERE filetype=" + type }
