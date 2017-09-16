import { ServicesDependencyInjectionPage } from './app.po';

describe('services-dependency-injection App', () => {
  let page: ServicesDependencyInjectionPage;

  beforeEach(() => {
    page = new ServicesDependencyInjectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
