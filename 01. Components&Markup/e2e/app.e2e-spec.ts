import { ComponentMarkupHomeworkPage } from './app.po';

describe('component-markup-homework App', () => {
  let page: ComponentMarkupHomeworkPage;

  beforeEach(() => {
    page = new ComponentMarkupHomeworkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
