import {Locator, Page} from "@playwright/test";

class ContactPage {
    readonly page: Page;
    readonly contactHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly messageInput: Locator;
    readonly uploadFileInput: Locator;
    readonly submitBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.contactHeader = page.locator("//h2[contains(text(),'Contact')]/strong[text()='Us']");
        this.nameInput = page.locator("[data-qa='name']");
        this.emailInput = page.locator("[data-qa='email']");
        this.subjectInput = page.locator("[data-qa='subject']");
        this.messageInput = page.locator("[data-qa='message']");
        this.uploadFileInput = page.locator("//input[@name='upload_file']");
        this.submitBtn = page.locator("[data-qa='submit-button']");
    }
}

export {ContactPage};
