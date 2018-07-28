import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';


/**
  TODO:
  [x] Keep a list of items: ['test', 'execute', 'refactor']
  [x] Add an item to the list: ['test', 'execute', 'refactor', 'new-item']
  [x] Remove an item from the list: ['test', 'execute', 'refactor']
  */

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
  let template: DebugElement;

  beforeEach(() => {
    // ACT: instancear y verificar existencia
    fixture = TestBed.createComponent(AppComponent);
    template = fixture.debugElement.componentInstance;
    comp = fixture.componentInstance;
    expect(template).toBeTruthy();
  });

  describe('Variable definitions', () => {
    // ASSERT
    it(`component should be defined`, async(() => {
      expect(template).toBeDefined();
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
  });

  describe('#add', () => {
    beforeEach(() => {
      // ACT
      comp.add('new-item');
      console.log(comp.items);
    });
    afterEach(() => {
      // CLEAN
      comp.remove();
    });

    // ASSERT
    it(`should have 4 items in list`, async(() => {
      expect(comp.items.length).toBe(4);
    }));
    it(`should add a new item at the end of list`, async(() => {
      const lastIndexOfList: number = comp.items.length - 1;
      expect(comp.items[lastIndexOfList]).toBe('new-item');
    }));

  });

  describe('#remove', () => {
    // ACT
    beforeEach(() => {
      comp.remove();
    });
    afterEach(() => {
      comp.add('refactor');
    });

    // ASSERT
    it('should remove "refactor" from items', () => {
      expect(comp.items.length).toBe(2);
      expect(comp.items).toEqual(['test', 'execute']);
      console.log(comp.items);
    });

  });

});
