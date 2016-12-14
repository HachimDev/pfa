import { PfaPage } from './app.po';

describe('pfa App', function() {
  let page: PfaPage;

  beforeEach(() => {
    page = new PfaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
