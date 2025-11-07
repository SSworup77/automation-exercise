import {expect, Locator, type Page} from "@playwright/test";

class SignUpPage {
    readonly page: Page;
    readonly signupHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupBtn: Locator;
    readonly signupInfoHeader: Locator;
    readonly accountInfoHeader: Locator;
    readonly nameFieldAgain: Locator;
    readonly emailFieldAgain: Locator;
    readonly genderRadio: Locator;
    readonly passwordField: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupHeader = page.locator("//h2[text()='New User Signup!']");
        this.nameInput = page.locator("[data-qa='signup-name']");
        this.emailInput = page.locator("[data-qa='signup-email']");
        this.signupBtn = page.locator("[data-qa='signup-button']");
        this.signupInfoHeader = page.locator("//b[text()='Enter Account Information']");
    }
    async goto() {
        await this.page.goto("/login");
    }
}

export {SignUpPage};
