import {expect, Locator, Page} from "@playwright/test";

class HomePage {
    readonly page: Page;
    readonly logo: Locator;
    readonly homePageIcon: Locator;
    readonly homepageText: Locator;
    readonly userStatus: Locator;
    readonly logoutBtn: Locator;
    readonly contactUs: Locator;
    readonly products: Locator;
    readonly testCases: Locator;
    readonly productsCart: Locator;
    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator("//img[@alt='Website for automation practice']");
        this.homePageIcon = page.locator("//a[text()=' Home' and @style='color: orange;']");
        this.homepageText = page.locator(
            "//h2[text()='Full-Fledged practice website for Automation Engineers']"
        );
        this.userStatus = page.locator("//a[contains(text(), 'Logged in as')]");
        this.logoutBtn = page.locator("//a[@href='/logout']");
        this.contactUs = page.locator("//a[@href='/contact_us']");
        this.products = page.locator("//a[@href='/products']");
        this.testCases = page.locator("//a[text()=' Test Cases']");
        this.productsCart = page.locator("//a[@href='/view_cart']");
    }
    async goto() {
        await this.page.goto("/");
    }
    async homePageLoads() {
        await expect(this.logo).toBeVisible();
        await expect(this.homePageIcon).toBeVisible();
        await expect(this.homepageText.first()).toBeVisible();
    }
}

export {HomePage};
