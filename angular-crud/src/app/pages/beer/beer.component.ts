import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/core/services/beer.service';
import { Beer } from 'src/app/core/model/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  public beers;

  constructor(
    private beerService: BeerService
  ) {
    this.beerService = beerService;
  }

  ngOnInit() {
    this.beerService
      .getBeers()
      .subscribe(res => {
        this.beers = res;
      }, err => {
        console.log(err);
      });
  }
}
