import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'veiculos',
    component: VeiculosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }