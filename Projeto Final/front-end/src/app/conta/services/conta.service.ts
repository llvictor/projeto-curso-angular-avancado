import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class ContaService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    let response = this.http
      .post(this.UrlServiceV1 + 'nova-conta', usuario, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  login(usuario: Usuario): Observable<Usuario> {
    let response = this.http
      .post(this.UrlServiceV1 + 'entrar', usuario, this.ObterHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }
}
