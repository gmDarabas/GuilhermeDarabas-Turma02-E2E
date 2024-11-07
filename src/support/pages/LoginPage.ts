import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import BasePage from './BasePage';
import LoginElements from '../elements/LoginElements';

export default class LoginPage extends BasePage {
  readonly loginElements: LoginElements;

  private readonly USUARIO_CORRETO = "avaliacaoqa@teste.com";
  private readonly PASSWORD_CORRETO = "Teste@123";

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.loginElements = new LoginElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.loginElements.getCampoEmail().fill(this.USUARIO_CORRETO);
    await this.loginElements.getCampoSenha().fill(this.PASSWORD_CORRETO);
    const botao =  await this.loginElements.getBotaoLogin();
    console.log({ botao })
    await botao.click();
  }

  async preencherFormularioInvalido(): Promise<void> {
    await this.loginElements.getCampoEmail().fill(faker.person.firstName());
    await this.loginElements.getCampoSenha().fill('33223745050');
    await this.loginElements.getBotaoLogin().click();
  }

  async validarLogin(): Promise<void> {
    expect(this.page.url()).toContain('/customer/account/')
    expect(this.page.isVisible(`text=${this.USUARIO_CORRETO}`)).toBeTruthy();
  }
}
