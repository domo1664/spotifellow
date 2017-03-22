import { SpotifellowPage } from './app.po';

describe('spotifellow App', function() {
  let page: SpotifellowPage;

  beforeEach(() => {
    page = new SpotifellowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
