import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardsComponent } from 'src/app/core/components/cards/cards.component';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
// import { BeerService } from 'src/app/core/services/beer.service';

@NgModule({
  declarations: [
    BeerComponent,
    BeerFormComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // BeerService
  ],
  bootstrap: []
})
export class BeerModule { }
