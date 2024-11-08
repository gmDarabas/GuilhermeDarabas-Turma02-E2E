import { Page } from '@playwright/test';
import BasePage from './BasePage';
import ListaProdutosElement from '../elements/ListaProdutosElements';

export default class ListaProdutosPage extends BasePage {
  readonly ListaProdutosElement: ListaProdutosElement;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.ListaProdutosElement = new ListaProdutosElement(page);
  }

  async clicarProdutoLista(index: number = 0): Promise<void> {
    await this.ListaProdutosElement.getProdutoLista(index).click()
  }
}
