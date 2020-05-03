import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turno } from '../models/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  selectedTurno: Turno;
  turno: Turno[];
  readonly URL_API = 'http://localhost:5000/api/turnos';
  constructor(private http: HttpClient) {
    this.selectedTurno = new Turno();
  }
  getTurno() {
    return this.http.get(this.URL_API);
  }

  getTurnobyId(_id: string) {
    return this.http.get<Turno>(`${this.URL_API}/${_id}`);
  }
}
