import {Locator, Page} from "@playwright/test";

class TestCasePage {
    readonly page: Page;
    readonly testCaseHeader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.testCaseHeader = page.locator("//b[text()='Test Cases']");
    }
    
}

export {TestCasePage};
