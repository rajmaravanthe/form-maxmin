import { MaxValuePage } from './app.po';

describe('max-value App', function() {
  let page: MaxValuePage;

  beforeEach(() => {
    page = new MaxValuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
