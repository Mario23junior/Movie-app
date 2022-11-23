import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrls = "http://localhost:8080/api/movie/";

  constructor(private http: HttpClient) {

  }

  findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrls)
  }

  favoritar(movie: Movie): Observable<any> {
    return this.http.patch(`${this.baseUrls}${movie.id}/favorito`, null);
  }
}
