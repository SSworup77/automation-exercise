import {test, expect} from "@playwright/test";
import {HomePage} from "../pageObjs/home.page";
import {ProductsPage} from "../pageObjs/products.page";
import {ProductDetailPage} from "../pageObjs/productDetails.page";

test.describe("All Product Page", () => {
    let homePage: HomePage;
    let productPage: ProductsPage;
    let productDetailPage: ProductDetailPage;
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        productPage = new ProductsPage(page);
        productDetailPage = new ProductDetailPage(page);
        await homePage.goto();
    });
    test("Should navigate to Products page", async ({page}) => {
        await homePage.homePageLoads();
        await homePage.products.click();
        await expect(productPage.productsHeader).toBeVisible();
        await expect(productPage.searchInput).toBeVisible();
        await expect(productPage.productsList.first()).toBeVisible();
        const productCount = await productPage.getProductsCount();
        expect(productCount).toBeGreaterThan(0);
        console.log(`Total products displayed: ${productCount}`);
    });
    test("should view product detail after clicking on View Product", async ({page}) => {
        await homePage.products.click();
        await productPage.viewProductLink.first().click();
        await expect(productDetailPage.productDetailSection).toBeVisible();
        await expect(productDetailPage.addToCartBtn).toBeVisible();
        await expect(productDetailPage.reviewTitle).toBeVisible();
        await expect(page.locator("section")).toContainText("Blue Top");
        await expect(page.locator("section")).toContainText("Rs. 500");
        await expect(page.locator("section")).toContainText("Availability: In Stock");
    });
    test("should display searched prodducts", async ({page}) => {
        await homePage.homePageLoads()
        await homePage.products.click()
        await productPage.searchInput.fill("top")
        await productPage.searchBtn.click()
        const productCount = await productPage.getProductsCount();
        expect(productCount).toBeGreaterThan(0);
        console.log(`Total products displayed after search: ${productCount}`);
    });
});
