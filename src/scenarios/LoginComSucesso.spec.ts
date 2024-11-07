import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Login com sucesso', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let loginPage: LoginPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(`${BASE_URL}customer/account/login/`);
  });

  test('Preencher formulário de cadastro', async () => {
    await loginPage.preencherFormulario();
    // await loginPage.page.waitForURL("**/customer/account/")
    await loginPage.validarLogin()
  });
});
