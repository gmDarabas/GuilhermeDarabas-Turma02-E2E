
import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ListaProdutosElement extends BaseElements {
    constructor(readonly page: Page) {
      super(page);
      this.page = page;
    }
  
    getProdutoLista(index: number = 0): Locator {
      return this.page.locator(`li.item.product.product-item >> nth=${index}`);
    }
  }
  