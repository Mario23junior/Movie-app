import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GivenBase } from '../model/GivenBase';

@Injectable({
  providedIn: 'root'
})
export class GivenBaseService {

  
  baseUrls = "http://localhost:8080/api/givenbase";

  constructor(
    private http: HttpClient) {

  }

  findAllGivenBase(): Observable<GivenBase[]> {
    let url = this.baseUrls
    return this.http.get<GivenBase[]>(url)
  }

  findByIdGivenBase(id: any): Observable<GivenBase> {
    let url = `${this.baseUrls}/${id}`
    return this.http.get<GivenBase>(url)
  }

}
