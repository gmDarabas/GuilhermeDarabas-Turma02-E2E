
import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
    constructor(readonly page: Page) {
      super(page);
      this.page = page;
    }
  
    getBotaoLogin(): Locator {
      return this.page.locator('#send2.action.login.primary');
    }
  
    getCampoEmail(): Locator {
      return this.page.locator('#email');
    }
  
    getCampoSenha(): Locator {
      return this.page.locator('input[name="login[password]"]');
    }
  }
  