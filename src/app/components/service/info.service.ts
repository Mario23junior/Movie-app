import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/Info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  baseUrls = "http://localhost:8080/api/info";

  constructor(
    private http: HttpClient) {

  }

  findAllInfo(): Observable<Info[]> {
    let url = this.baseUrls
    return this.http.get<Info[]>(url)
  }

  findByIdInfo(id: any): Observable<Info> {
    let url = `${this.baseUrls}/${id}`
    return this.http.get<Info>(url)
  }

}
