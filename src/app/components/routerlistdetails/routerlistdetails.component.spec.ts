import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlistdetailsComponent } from './routerlistdetails.component';

describe('RouterlistdetailsComponent', () => {
  let component: RouterlistdetailsComponent;
  let fixture: ComponentFixture<RouterlistdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterlistdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
