import {} from 'jasmine';

describe('AppComponent Tests', () => {
  beforeEach(() => {
    browser.get('');
  });
  it('Browser should have a defined title', () => {
    expect(browser.getTitle()).toEqual('Angular Protractor');
  });

});
