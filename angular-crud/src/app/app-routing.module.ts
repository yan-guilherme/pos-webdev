import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { beerRoutes } from './pages/beer/beer-routing.module';

const routes: Routes = [
  {
    path: "",
    // component: LayoutComponent,
    children: [ 
      ...beerRoutes,
    ],
    // canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

