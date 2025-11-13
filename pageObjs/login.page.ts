import {expect, Locator, type Page} from "@playwright/test";

class LoginPage {
    readonly page: Page;
    readonly loginHeader: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly loginErrorMessage:Locator

    constructor(page: Page) {
        this.page = page;
        this.loginHeader = page.locator("//h2[text()='Login to your account']");
        this.usernameInput = page.locator("[data-qa='login-email']");
        this.passwordInput = page.locator("[data-qa='login-password']");
        this.loginBtn = page.locator("[data-qa='login-button']");
        this.loginErrorMessage = page.locator("//p[text()='Your email or password is incorrect!']")
    }
    async goto() {
        await this.page.goto("login");
    }
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}

export {LoginPage};
