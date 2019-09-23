import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  
  public API = 'http://localhost:3000/';
  public RESERVA_API = this.API + '/reservas';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.RESERVA_API + '/');
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.RESERVA_API + '/' + id);
  }

  save(reserva: any): Observable<any> {
    debugger;
    let result: Observable<any>;

    result = this.http.post(this.RESERVA_API + '/', reserva);

    return result;
  }

  remove(id: string) {
    return this.http.delete(this.RESERVA_API + '/' + id);
  }
}
