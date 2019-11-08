import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';

export const beerRoutes: Routes = [
  {
    path: 'beer',
    pathMatch: 'full',
    component: BeerComponent,
    // canActivate: [LoggedInGuard]
  },
  {
    path: 'beer/form',
    component: BeerFormComponent,
    // canActivate: [LoggedInGuard]
  },
  // {
  //   path: 'beer/:id',
  //   component: BeerDetailComponent,
  //   // canActivate: [LoggedInGuard]
  // },
];
@NgModule({
  imports: [RouterModule.forChild(beerRoutes)],
  exports: [RouterModule]
})
export class BeerModule { }