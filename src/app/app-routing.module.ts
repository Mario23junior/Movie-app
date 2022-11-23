import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritadosComponent } from './components/favoritados/favoritados.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },{
    path:'favoritado',
    component:FavoritadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
