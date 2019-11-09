# Projeto CRUD - Cervejas

# Comentar sobre o que faz cada método do angular

/**
 *  O Routing module serve para o gerenciamento de rotas dos componets do angular
 */

# Enviar uma Pull Request da sua Branch para a Master
# master -> seu_nome

# https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches
# git checkout master
# git pull
# git checkout -b [seu_nome]
# git push origin [seu_nome]
# git branch -a
# 



# npm install -g json-server 

beer.json


{
    "beer": [{
        "id": 1,
        "name": "beer 1",
        "description": "Brazil"
    },
{
        "id": 2,
        "name": "beer 2",
        "description": "Brazil"
    }
	]
}

json-server beer.json

postman


ng g service core/api

criar uma model 
src/core/model/beer.model.ts

export class Beer {
    _id: string;
    name: string;
    description: string;
}


# editar src/app/core/service/api.service.ts

// 
service
//


# atualizar src/app/beer/beer.component.ts

import { ApiService } from '../api.service';
import { Beer } from 'src/core/model/beer';

constructor(private _api: ApiService) { }

ngOnInit() {
    this._api.getBeer()
    .subscribe(res => {
      this.beers = res;
      console.log(this.beers);
      // this.isLoadingResults = false;
    }, err => {
      console.log(err);
      // this.isLoadingResults = false;
    });
 }



# editar src/app/beer/beer.component.html

incluir o *ngFor das cervejas e

routerLink="/beer-detalhe/{{i._id}}" 



# editar src/app/beer-novo/beer-novo.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/core/service/api.service';

beerForm: FormGroup;
//  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

ngOnInit() {
     this.beerForm = this.formBuilder.group({
    	'name' : [null, Validators.required],
    	'description' : [null, [Validators.required, Validators.minLength(4)]]
  });
  }


addBeer(form: NgForm) {
    // this.isLoadingResults = true;
    this.api.addBeer(form)
      .subscribe(res => {
          const id = res['_id'];
          // this.isLoadingResults = false;
          this.router.navigate(['/beer-detalhe', id]);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        });
  }


# editar src/app/beer-novo/beer-novo.component.html

<div>
  <h3>Adicionar Nova Cerveja</h3>
</div>
<form class="container" [formGroup]="beerForm" (ngSubmit)="addBeer(beerForm.value)">
 
    <input name="name" placeholder="Nome da Cerveja" formControlName="name">
  
    <textarea  name="description" placeholder="Descrição da Cerveja" formControlName="description"></textarea>
 

  <button type="submit" [disabled]="!beerForm.valid">Adicionar</button>

</form>


# editar src/app/beer-editar/beer-editar.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
@Component({
  selector: 'app-beer-editar',
  templateUrl: './beer-editar.component.html',
  styleUrls: ['./beer-editar.component.scss']
})
export class BeerEditarComponent implements OnInit {
  _id: String = '';
  beerForm: FormGroup;
  name: String = '';
  description: String = '';
  // isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
    this.beerForm = this.formBuilder.group({
   'name' : [null, Validators.required],
   'description' : [null, Validators.required]
 });
 }

 getBeer(id) {
  this.api.getBeer(id).subscribe(data => {
    this._id = data._id;
    this.beerForm.setValue({
      name: data.name,
      description: data.description
    });
  });
}

updateBeer(form: NgForm) {
  // this.isLoadingResults = true;
  this.api.updateBeer(this._id, form)
    .subscribe(res => {
        // this.isLoadingResults = false;
        this.router.navigate(['/beer-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        // this.isLoadingResults = false;
      }
    );
}
}




# editar src/app/beer-editar/beer-editar.component.html

<div>
    <h3>Editar Cerveja</h3>
  </div>

  <form class="container" [formGroup]="beerForm" (ngSubmit)="updateBeer(beerForm.value)">
    
      <input name="name" placeholder="Nome da Cerveja" formControlName="name">
    
      <textarea  name="description" placeholder="Descrição da Cerveja" formControlName="description"></textarea>
      

    <button type="submit" [disabled]="!beerForm.valid" >Atualizar</button>

  </form>


# editar src/app/beer-novo/beer-detalhe.component.ts

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/service/api.service';
import { Beer } from 'src/model/beer';
@Component({
  selector: 'app-beer-detalhe',
  templateUrl: './beer-detalhe.component.html',
  styleUrls: ['./beer-detalhe.component.scss']
})
export class BeerDetalheComponent implements OnInit {
  beer: Beer = { _id: '', name: '', description: '', dt_atualizacao: null };
  // isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
  }

  getBeer(id) {
    this.api.getBeer(id)
      .subscribe(data => {
        this.beer = data;
        // console.log(this.beer);
        // this.isLoadingResults = false;
      });
  }

  deleteBeer(id) {
    // this.isLoadingResults = true;
    this.api.deleteBeer(id)
      .subscribe(res => {
          // this.isLoadingResults = false;
          this.router.navigate(['/beers']);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        }
      );
  }
}


# editar src/app/beer-detalhe/beer-detalhe.component.html

<div class="container">

    <div class="example-loading-shade"
         *ngIf="isLoadingResults">
       <!-- loading vai aqui -->
    </div>

    <div class="button-row">
      <button [routerLink]="['/beers']">Voltar</button>
    </div>

	<div card>
	
	{{beer.name}}
	{{beer.description}}
	{{beer.dt_atualizacao | date}}

	</div card>
	
	
        <button  class="teste" [routerLink]="['/beer-editar', beer._id]"> Editar</button>
        <button (click)="deleteBeer(beer._id)"> Excluir</button>
      
  </div>



