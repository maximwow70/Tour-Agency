import { TourMapPage } from './app.po';

describe('tour-map App', () => {
  let page: TourMapPage;

  beforeEach(() => {
    page = new TourMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
