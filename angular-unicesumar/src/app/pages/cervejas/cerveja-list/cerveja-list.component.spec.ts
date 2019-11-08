import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaListComponent } from './cerveja-list.component';

describe('CervejaListComponent', () => {
  let component: CervejaListComponent;
  let fixture: ComponentFixture<CervejaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
