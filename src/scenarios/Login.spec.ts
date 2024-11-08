import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Login', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  let LOGIN_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.login_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(`${LOGIN_URL}`);
  });

  test('Login com sucesso', async () => {
    await loginPage.preencherFormulario();
    await loginPage.validarLogin()
  });
});
