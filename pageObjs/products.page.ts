import {Locator, Page} from "@playwright/test";

class ProductsPage {
    readonly page: Page;
    readonly productsHeader: Locator;
    readonly searchInput: Locator;
    readonly searchBtn: Locator;
    readonly viewProductLink: Locator;
    readonly productsList: Locator;
    readonly singleProduct: Locator;
    readonly productInfo: Locator;

    constructor(page: Page) {   
        this.page = page;
        this.productsHeader = page.locator("//h2[text()='All Products']");
        this.searchInput = page.locator("[id='search_product']");
        this.searchBtn = page.locator("[id='submit_search']");
        this.viewProductLink = page.locator("//a[@href='/product_details/1']");
        this.productsList = page.locator("//div[@class='features_items']");
        this.singleProduct = page.locator("//div[@class='single-products']");
        this.productInfo = page.locator("//div[contains(@class,'productinfo')]");
    }
    async getProductsCount() {
        return await this.singleProduct.count();
    }
}
export {ProductsPage};
