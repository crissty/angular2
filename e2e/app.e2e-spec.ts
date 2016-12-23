import { Daw2Page } from './app.po';

describe('daw2 App', function() {
  let page: Daw2Page;

  beforeEach(() => {
    page = new Daw2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
