import { I18nWorkshopPage } from './app.po';

describe('i18n-workshop App', () => {
  let page: I18nWorkshopPage;

  beforeEach(() => {
    page = new I18nWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
