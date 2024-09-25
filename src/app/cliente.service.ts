
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = "http://localhost:3000/clientes";

  constructor(private _httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this._httpClient.get<Cliente[]>(this.url);
  }

  
}
