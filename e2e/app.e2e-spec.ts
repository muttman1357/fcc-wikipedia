import { FccWikipediaPage } from './app.po';

describe('fcc-wikipedia App', () => {
  let page: FccWikipediaPage;

  beforeEach(() => {
    page = new FccWikipediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
