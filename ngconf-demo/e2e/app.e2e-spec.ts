import { NgconfDemoPage } from './app.po';

describe('ngconf-demo App', () => {
  let page: NgconfDemoPage;

  beforeEach(() => {
    page = new NgconfDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
