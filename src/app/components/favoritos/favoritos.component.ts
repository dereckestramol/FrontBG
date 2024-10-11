import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FavoritoService } from '../../services/favorito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit{
  private _serviceFavortio=inject(FavoritoService);
  productosFavoritos:any[]=[]
  
  ngOnInit(): void {
    this._serviceFavortio.getFavoritoDB().subscribe({
      next:(resp:any)=>{
        this.productosFavoritos=resp['data'];
      }
    });
  }
  eliminarFavorito(producto:any){
    this._serviceFavortio.deleteFavoritoDB(this.crearFavorito(producto)).subscribe({
      next:(resp:any)=>{
        if(resp.code==200){
          Swal.fire({
            icon: "success",
            title: "Favorito eliminado correctamente",
            showConfirmButton: false,
            timer: 1000
          });
          this.ngOnInit();
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
