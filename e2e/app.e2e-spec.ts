import { IOTPWAPage } from './app.po';

describe('iot-pwa App', () => {
  let page: IOTPWAPage;

  beforeEach(() => {
    page = new IOTPWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
