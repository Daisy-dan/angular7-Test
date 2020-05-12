import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlistComponent } from './paddlist.component';

describe('PaddlistComponent', () => {
  let component: PaddlistComponent;
  let fixture: ComponentFixture<PaddlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
