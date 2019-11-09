import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from 'src/app/core/components/cards/cards.component';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BeerEditComponent } from './beer-edit/beer-edit.component';
// import { BeerService } from 'src/app/core/services/beer.service';

// Tudo que for necessário ser utilizado para o funcionamento do modulo Beer deve ser importado neste arquivo
@NgModule({
  declarations: [
    BeerComponent,
    BeerFormComponent,
    CardsComponent,
    BeerEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // BeerService
  ],
  bootstrap: []
})
export class BeerModule { }
