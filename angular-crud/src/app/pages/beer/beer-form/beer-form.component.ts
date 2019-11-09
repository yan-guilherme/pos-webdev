import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

// Componente de inclusão de uma nova cerveja

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {
  beerForm: FormGroup;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.beerForm = this.formBuilder.group({
        'name' : [null, Validators.required],
        'description' : [null, [Validators.required, Validators.minLength(4)]]
    });
  }

  addBeer(form: NgForm) {
    console.log(form);
    this.api.addBeer(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/beer']);
        }, (err) => {
          console.log(err);
        });
  }
}
