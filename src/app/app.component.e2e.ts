import {} from 'jasmine';
import {browser, element, by, By, $, $$, ElementArrayFinder} from 'protractor';

describe('AppComponent Tests', () => {
  const todoListItems: ElementArrayFinder = element.all(by.css('li'));
  beforeEach(() => {
    browser.get('');
  });
  it('Browser should have a defined title', () => {
    expect<any>(browser.getTitle()).toEqual('Angular Protractor');
  });
  it('Should get the number of items as defined in item object', () => {
    expect<any>(todoListItems.count()).toBe(3);
  });
  it('Should get the first item text as defined', () => {
    expect<any>(todoListItems.first().getText()).toEqual('test');
  });
  it('Should get the last item text as defined', () => {
    expect<any>(todoListItems.last().getText()).toEqual('refactor');
  });

});
