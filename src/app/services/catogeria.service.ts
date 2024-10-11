import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CatogeriaService {
  private _http=inject(HttpClient);
  private categoriaService=environment.baseurl+environment.categoriaURL;
  constructor() { }
  getProducto(){
    return this._http.get(this.categoriaService);
  }
}
