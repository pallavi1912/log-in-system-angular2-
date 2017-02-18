import { LoginSystemPage } from './app.po';

describe('login-system App', function() {
  let page: LoginSystemPage;

  beforeEach(() => {
    page = new LoginSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
