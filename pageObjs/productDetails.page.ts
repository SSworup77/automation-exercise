import {Locator, Page} from "@playwright/test";

class ProductDetailPage {
    readonly page: Page;
    readonly productDetailSection: Locator;
    readonly quantityInput: Locator;
    readonly addToCartBtn: Locator;
    readonly reviewTitle: Locator;
    constructor(page: Page) {
        this.page = page;
        this.productDetailSection = page.locator("//div[@class='product-details']");
        this.quantityInput = page.locator("[id='quantity']");
        this.addToCartBtn = page.locator("//button[contains(@class,'cart')]");
        this.reviewTitle = page.locator("//a[text()='Write Your Review']");
    }
}

export {ProductDetailPage};
