import {browser, element, by, By} from 'protractor';

describe('AppComponent Tests', () => {
  beforeEach(() => {
    browser.get('');
  });

  it('Test spec for debug and play', () => {
    expect<any>(element(by.id('my_id')).getText()).toEqual('my text');
  });
});

