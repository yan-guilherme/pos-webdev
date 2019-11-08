import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Projeto Web de Cerveja';


  redirecionar() {
    this.title = 'Redirect';

  }
}
