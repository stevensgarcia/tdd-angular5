import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../src/app/app.component';

describe('AppComponent Test Suite', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // inject the component into the test suite
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
      .compileComponents();
 }));

  // initiate the component
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

});
