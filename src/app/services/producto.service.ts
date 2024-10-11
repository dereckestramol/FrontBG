import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productoService=environment.baseurl+environment.productosURL;
  constructor(private httpClient: HttpClient) { }
  getProducto(){
    return this.httpClient.get(this.productoService);
  }
}
