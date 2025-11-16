import {Locator, Page} from "@playwright/test";

class HomePage {
    readonly page: Page;
    readonly logo: Locator;
    readonly homePageIcon: Locator;
    readonly homepageText: Locator;
    readonly userStatus:Locator;
    readonly logoutBtn:Locator
    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator("//img[@alt='Website for automation practice']");
        this.homePageIcon = page.locator("//a[text()=' Home' and @style='color: orange;']");
        this.homepageText = page.locator(
            "//h2[text()='Full-Fledged practice website for Automation Engineers']"
        );
        this.userStatus=page.locator("//a[contains(text(), 'Logged in as')]")
        this.logoutBtn=page.locator("//a[@href='/logout']")
    }
    async goto() {
        await this.page.goto("/");
    }
}

export {HomePage};
