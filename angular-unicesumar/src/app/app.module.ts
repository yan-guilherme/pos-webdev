import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { CervejaFormModule } from './pages/cervejas/cerveja-form/cerveja-form.module';
import { CervejaListModule } from './pages/cervejas/cerveja-list/cerveja-list.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CervejaFormModule,
    CervejaListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
