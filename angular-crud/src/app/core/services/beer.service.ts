import { Injectable } from '@angular/core';
// import { Service } from 'app/core/service';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../model/beer.model';


@Injectable()
export class BeerService {

//   private url = Service.API_ENDPOINT + 'beer';
  private url = 'localhost: beer'; // TODO Server

  constructor(
    private http: HttpClient
  ) { }

    beers = [];

    add(beer) {
        this.beers.push(beer);
    }

    getBeers() {
        return this.beers;
    }

    getBeerJson() {
        return this.http.get<Beer>('https://api.myjson.com/bins/j29yk');
    }

    clear() {
        this.beers = [];
        return this.beers;
    }
}
