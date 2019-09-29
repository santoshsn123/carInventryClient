import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventryComponent } from './add-inventry.component';

describe('AddInventryComponent', () => {
  let component: AddInventryComponent;
  let fixture: ComponentFixture<AddInventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
