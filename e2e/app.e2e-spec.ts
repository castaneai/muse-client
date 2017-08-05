import { MuseClientPage } from './app.po';

describe('muse-client App', () => {
  let page: MuseClientPage;

  beforeEach(() => {
    page = new MuseClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
