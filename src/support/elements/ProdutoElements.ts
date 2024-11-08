
import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ProdutoElements extends BaseElements {
    constructor(readonly page: Page) {
      super(page);
      this.page = page;
    }

    getTitulo(): Promise<string | null> {
      return this.page.locator(`h1.page-title span.base`).textContent();
    }
    
    getMensagemSucesso(): Locator {
      return this.page.locator('div.message-success');
      // locator.waitFor({ timeout: 5000 });
      // return locator
    }

    getBotaoAdicionarCarrinho(): Locator {
      return this.page.locator(`#product-addtocart-button`);
    }
  
    getOpcaoTamanho(tamanho: string): Locator {
      return this.page.locator(`div[option-label="${tamanho}"]`).first();
    }

    getOpcaoCor(cor: string): Locator {
      return this.page.locator(`div[option-label="${cor}"]`).first();
    }
  }
  