import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css', // add it here
    imports:[CommonModule, FormsModule]
})
export class PrincipalComponent implements OnInit{
  productos:any[]=[];
  buscar="";
  promedio:any=0;
  private serviceProducto=inject(ProductoService);
  ngOnInit(): void {
      this.serviceProducto.getProducto().subscribe({
        next:(resp:any)=>{
          this.productos=resp["data"];
          this.productos.forEach(precio=>this.promedio+=precio.precio);
          this.promedio=this.promedio/this.productos.length;
        }
      })
      

      console.log(this.promedio)
    }
  Categorias(categoria:any){
    
    console.log(categoria)
    this.productos=this.productos.filter(producto=>producto.descripCategoria==categoria)
    if(this.buscar==""){
      this.ngOnInit();
    }
  }
}
