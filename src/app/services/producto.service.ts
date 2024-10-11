import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productoService="http://localhost:5182/"+"Producto/GetProducto";
  constructor(private httpClient: HttpClient) { }
  getProducto(){
    return this.httpClient.get(this.productoService);
  }
}
