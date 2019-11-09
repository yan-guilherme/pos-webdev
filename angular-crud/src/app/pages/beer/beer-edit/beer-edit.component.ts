import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-beer-edit',
  templateUrl: './beer-edit.component.html',
  styleUrls: ['./beer-edit.component.scss']
})
export class BeerEditComponent implements OnInit {

  _id: String = '';
  beerForm: FormGroup;
  name: String = '';
  description: String = '';
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
    this.beerForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  // recuperar cerveja pelo seu id e colocando no form de edição
  getBeer(id) {
    this.api.getBeer(id).subscribe(data => {
      this._id = data.id;
      this.beerForm.setValue({
        name: data.name,
        description: data.description
      });
    });
  }

  // Mandando as atualizações para serem alteradas no server json
  updateBeer(form: NgForm) {
    // this.isLoadingResults = true;
    this.api.updateBeer(this._id, form)
      .subscribe(res => {
          // this.isLoadingResults = false;
          this.router.navigate(['/beer']);
        }, (err) => {
          console.log(err);
          // this.isLoadingResults = false;
        }
      );
  }
}
