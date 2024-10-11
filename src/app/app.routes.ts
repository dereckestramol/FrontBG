import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

export const routes: Routes = [
    {path:"principal", component:PrincipalComponent},
    {path:"favoritos", component:FavoritosComponent},
    {path:"**", redirectTo:"principal", pathMatch:"full"}
]