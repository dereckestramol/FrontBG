import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritoService } from '../../services/favorito.service';
import Swal from 'sweetalert2';
import { CatogeriaService } from '../../services/catogeria.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css', // add it here
    imports:[CommonModule, FormsModule]
})
export class PrincipalComponent implements OnInit{
  private serviceProducto=inject(ProductoService);
  private serviceFavoritos=inject(FavoritoService);
  private serviceCategoria=inject(CatogeriaService);
  productos:any[]=[];
  favortios:any[]=[];
  categoriaList:any[]=[];
  buscar="Seleccione una categoria a buscar";
  promedio:any=0;
  idProductosFavoritos:any[]=[];
  productosAll:any[]=[];
  ngOnInit(): void {
     this.cargarFavoritos();
      this.cargarProductos();
      this.cargarCategorias()
    }
     cargarFavoritos(){
      this.serviceFavoritos.getFavoritoDB().subscribe({
        next:(resp:any)=>{
          this.favortios=resp["data"];
        }
      })
    }
     cargarProductos(){
      this.serviceProducto.getProducto().subscribe({
        next:(resp:any)=>{
          this.productos=resp["data"];
          this.productosAll=resp["data"];
          this.productos.forEach(precio=>this.promedio+=precio.precio);
          this.promedio=this.promedio/this.productos.length;
        }
      })
    }
    cargarCategorias(){
      this.serviceCategoria.getCategoria().subscribe({
        next:(resp:any)=>{
          this.categoriaList=resp["data"];
        }
      })
    }
     filtarCategoria(){
    this.productos=this.productosAll;  
    this.productos=this.productos.filter(producto=>producto.idCategoria==this.buscar);
    if(this.buscar=="0"){
      this.cargarFavoritos();
      this.cargarProductos();
    }
  }
  obtenerFavorito(producto:any){
    let prueba=this.favortios.filter(favorito=>favorito.idProducto==producto);
    let dad="";
    return prueba;
  }
  agregarFavorito(producto:any){
    this.serviceFavoritos.postFavoritoDB(this.crearFavorito(producto)).subscribe({
      next:(resp:any)=>{
        if(resp.code==200){
          Swal.fire({
            icon: "success",
            title: "Favorito agregado correctamente",
            showConfirmButton: false,
            timer: 1000
          });
          this.cargarFavoritos();
        }
      }
    });
  }
  eliminarFavorito(producto:any){
    this.serviceFavoritos.deleteFavoritoDB(this.crearFavorito(producto)).subscribe({
      next:(resp:any)=>{
        if(resp.code==200){
          Swal.fire({
            icon: "success",
            title: "Favorito eliminado correctamente",
            showConfirmButton: false,
            timer: 1000
          });
          this.cargarFavoritos();
        }
      }
    });
  }
  crearFavorito(item:any){
    let favoritoCreate={
      idProducto:item.idProducto,
      idCategoria:item.idCategoria
    }
    return favoritoCreate
  }
}
