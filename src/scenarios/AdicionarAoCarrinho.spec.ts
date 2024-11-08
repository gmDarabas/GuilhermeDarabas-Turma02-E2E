import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';
import ListaProdutosPage from '../support/pages/ListaProdutosPage';
import ProdutoPage from '../support/pages/ProdutoPage';

test.describe('Adiconar produto ao carrinho', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let produtosPage: ListaProdutosPage;
  let BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    produtosPage = new ListaProdutosPage(page);
    await page.goto(`${BASE_URL}men/tops-men/jackets-men.html`);
  });

  test('Adicionar produto ao carrinho', async () => {
    await produtosPage.clicarProdutoLista();
    const produtoPage = new ProdutoPage(produtosPage.page);
    await produtoPage.adicionarAoCarrinho();
    await produtoPage.validarAdicionadoAoCarrinho()
  });
});
