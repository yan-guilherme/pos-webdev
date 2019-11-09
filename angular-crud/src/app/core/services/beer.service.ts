import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Beer } from 'src/core/model/beer.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://5dc6ba94317717001434f7fa.mockapi.io/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers (): Observable<Beer[]> {
    return this.http.get<Beer[]>(apiUrl)
      .pipe(
        tap(beers => console.log('leu as cervejas')),
        catchError(this.handleError('getBeers', []))
      );
  }

  getBeer(id: number): Observable<Beer> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Beer>(url).pipe(
      tap(_ => console.log(`leu a cerveja: id=${id}`)),
      catchError(this.handleError<Beer>(`getBeer id=${id}`))
    );
  }

  addBeer (beer): Observable<Beer> {
    return this.http.post<Beer>(apiUrl, beer, httpOptions).pipe(
      
      tap((beer: Beer) => console.log(`adicionou a cerveja com w/ id=${beer._id}`)),
      catchError(this.handleError<Beer>('addBeer'))
    );
  }

  updateBeer(id, beer): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, beer, httpOptions).pipe(
      tap(_ => console.log(`atualiza a cerveja com id=${id}`)),
      catchError(this.handleError<any>('updateBeer'))
    );
  }

  deleteBeer (id): Observable<Beer> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Beer>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a cerveja com id=${id}`)),
      catchError(this.handleError<Beer>('deleteBeer'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}