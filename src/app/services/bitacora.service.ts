import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bitacora } from '../models/bitacora';


@Injectable({
  providedIn: 'root'

})
export class BitacoraService {
  selectedBitacora: Bitacora;
  bitacoras: Bitacora[];
  readonly URL_API = 'http://localhost:5000/api/bitacoras';

  constructor(private http: HttpClient) {
    this.selectedBitacora = new Bitacora();
   }

  getBitacora() {
    return this.http.get(this.URL_API);
  }

  getBitacorabyId(_id: string) {
    return this.http.get<Bitacora>(`${this.URL_API}/${_id}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  postBitacora(Bitacora: Bitacora) {
    return this.http.post(this.URL_API, Bitacora);
  }

  // tslint:disable-next-line: no-shadowed-variable
  putBitacora(Bitacora: Bitacora) {
    return this.http.put(this.URL_API + `/${Bitacora._id}`, Bitacora );
  }

  // tslint:disable-next-line: variable-name
  deleteBitacora(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
