import { ModulesRouterPage } from './app.po';

describe('modules-router App', () => {
  let page: ModulesRouterPage;

  beforeEach(() => {
    page = new ModulesRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
