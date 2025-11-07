import { expect, Locator, type Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly loginHeader: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeader = page.locator("//h2[text()='Login to your account']");
    this.usernameInput = page.locator("[data-qa='login-email']");
    this.passwordInput = page.locator("[data-qa='login-password']");
    this.loginBtn = page.locator("[data-qa='login-button']");
  }
  async goto() {
    await this.page.goto("/login");
  }
}

export { LoginPage };
