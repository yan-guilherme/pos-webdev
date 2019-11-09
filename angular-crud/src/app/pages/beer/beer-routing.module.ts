import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerEditComponent } from './beer-edit/beer-edit.component';

/**
 *  O Routing module serve para o gerenciamento de rotas dos componets do angular
 */

export const beerRoutes: Routes = [
  {
    path: 'beer',
    component: BeerComponent,
    data: { title: 'Lista de Cervejas' }
  },
  // {
  //   path: 'beer-detalhe/:id',
  //   component: BeerDetalheComponent,
  //   data: { title: 'Detalhe das Cervejas' }
  // },
  {
    path: 'beer-novo',
    component: BeerFormComponent,
    data: { title: 'Adicionar Cerveja' }
  },
  {
    path: 'beer-edit/:id',
    component: BeerEditComponent,
    data: { title: 'Editar a Cerveja' }
  },
  { path: '',
    redirectTo: '/beer',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(beerRoutes)],
  exports: [RouterModule]
})
export class BeerModule { }