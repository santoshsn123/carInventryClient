import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInventryComponent } from './view-inventry.component';

describe('ViewInventryComponent', () => {
  let component: ViewInventryComponent;
  let fixture: ComponentFixture<ViewInventryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInventryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInventryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
