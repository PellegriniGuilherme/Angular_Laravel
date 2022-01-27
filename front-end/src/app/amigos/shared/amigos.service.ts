import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Amigo } from './amigo';
import { Api } from './api';

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  amigos: Amigo[] = [];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Api<Amigo[]>>(`${environment.api}/indicacoes`);
  }

  create(body: Amigo) {
    return this.http.post<Api<undefined>>(`${environment.api}/indicacao`, body);
  }

  update(id: number, body: object) {
    return this.http.put<Api<undefined>>(`${environment.api}/indicacao/${id}`, body);
  }

  delete(id: number) {
    return this.http.delete<Api<null>>(`${environment.api}/indicacao/${id}`);
  }

  getById(id: number) {
    return this.http.get<Api<Amigo>>(`${environment.api}/indicacao/${id}`);
  }
}
