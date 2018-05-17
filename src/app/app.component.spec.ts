import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // ASSEMBLE
  let fixture: ComponentFixture<AppComponent>;
  let comp: AppComponent;
  let app: DebugElement;

  beforeEach(() => {
    // ACT
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    comp = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // ASSERT
  it(`component should be defined`, async(() => {
    expect(app).toBeDefined();
  }));
  it(`List should be defined`, async(() => {
    expect(comp.items).toBeDefined();
  }));
  it(`should have 3 items`, async(() => {
    expect(comp.items.length).toBe(3);
  }));
  it(`should contain items`, async(() => {
    expect(comp.items).toEqual(['test', 'execute', 'refactor']);
  }));

  describe('Testing add method', () => {
    beforeEach(() => {
      // ACT
      comp.add('new-item');
    });

    // ASSERT
  it(`should have 4 items in list`, async(() => {
    expect(comp.items.length).toBe(4);
  }));
  it(`should add a new item at the end of list`, async(() => {
    const lastIndexOfList: number = comp.items.length - 1;
    expect(comp.items[lastIndexOfList]).toBe('new-item');
  }));

  })

});
