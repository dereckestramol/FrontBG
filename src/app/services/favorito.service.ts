import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private _http=inject(HttpClient);
  private getFavorito=environment.baseurl+environment.favoritosGetURL;
  private postFavorito=environment.baseurl+environment.favoritosPostURL;
  private deleteFavorito=environment.baseurl+environment.favoritosDeleteURL;
  constructor() { }
  getFavoritoDB(){
    return this._http.get(this.getFavorito);
  }
  postFavoritoDB(favorito:any){
    return this._http.post(this.postFavorito,favorito);
  }
  deleteFavoritoDB(favorito:any){
    return this._http.post(this.deleteFavorito, favorito);
  }
}
