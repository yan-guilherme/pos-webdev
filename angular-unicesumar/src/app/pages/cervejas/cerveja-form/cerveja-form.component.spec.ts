import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaFormComponent } from './cerveja-form.component';

describe('CervejaFormComponent', () => {
  let component: CervejaFormComponent;
  let fixture: ComponentFixture<CervejaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
