import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import ProdutoElements from '../elements/ProdutoElements';

export default class ProdutoPage extends BasePage {
  readonly produtoElement: ProdutoElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.produtoElement = new ProdutoElements(page);
  }

  async adicionarAoCarrinho(): Promise<void> {
    await this.produtoElement.getOpcaoTamanho('XS').click();
    await this.produtoElement.getOpcaoCor('Black').click();
    await this.produtoElement.getBotaoAdicionarCarrinho().click();
  }

  async validarAdicionadoAoCarrinho(): Promise<void> {
    const messageLocator = this.produtoElement.getMensagemSucesso();
    await expect(messageLocator).toBeVisible();
    const titulo = await this.produtoElement.getTitulo();
    const messageAdicionado = await messageLocator.locator('div[data-bind]').textContent();
    expect(messageAdicionado).toContain(titulo); 
  }
}
