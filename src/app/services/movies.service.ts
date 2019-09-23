import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public API = 'http://localhost:3000/';
  public MOVIE_API = this.API + 'movies';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.MOVIE_API + '/');
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.MOVIE_API + '/' + id);
  }

  save(movie: any): Observable<any> {
    let result: Observable<any>;
    debugger;
    result = this.http.post(this.MOVIE_API, movie);

    return result;
  }

  remove(id: string) {
    return this.http.delete(this.MOVIE_API + '/' + id);
  }
}
