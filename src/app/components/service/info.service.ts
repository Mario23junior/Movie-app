import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/Info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  baseUrls = "http://localhost:8080/api/info/";

  constructor(
    private http: HttpClient) {

  }

  findAllInfo(): Observable<Info[]> {
    return this.http.get<Info[]>(this.baseUrls)
  }
}
