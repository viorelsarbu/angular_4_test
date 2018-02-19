import { Angular4Test } from './app.po';

describe('angular4 App', () => {
  let page: Angular4Test;

  beforeEach(() => {
    page = new Angular4Test();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
