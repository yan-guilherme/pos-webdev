import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Beer } from 'src/app/core/model/beer.model';

// No service encontra-se todo o CRUD e este fica responsavel por comunicar com o server json para gravar os dados

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/beer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getBeers(): Observable<Beer[]>{
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
      
      tap((beer: Beer) => console.log(`adicionou a cerveja com w/ id=${beer.id}`)),
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
