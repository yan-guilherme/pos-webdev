import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { Beer } from 'src/app/core/model/beer.model';
import { Observable } from 'rxjs';

/** Componente default que busca e lista todas as cervejas cadastradas no server json*/

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  public beers;
  //beers: Observable<Beer[]>;

  constructor(private api: ApiService,private router: Router) { }

  // metodo utilizado para carregar as cervejas assim que a página é aberta
  ngOnInit() {
    this.api.getBeers()
      .subscribe(res => {
        this.beers = res;
        //console.log(this.beers);
        // this.isLoadingResults = false;
      }, err => {
        console.log(err);
        // this.isLoadingResults = false;
      });
  }
  
  editBeer(beer){
    this.router.navigate(['/beer-edit', beer]);
  }
}
