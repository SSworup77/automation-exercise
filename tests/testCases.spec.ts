import test, {expect} from "@playwright/test";
import {HomePage} from "../pageObjs/home.page";
import {TestCasePage} from "../pageObjs/testCases.page";

test.describe("Test cases page", () => {
    let homePage: HomePage;
    let testCasePage: TestCasePage;
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });
    test("Should navigate to Test Cases page", async ({page}) => {
        testCasePage = new TestCasePage(page);
        await homePage.homePageLoads();
        await homePage.testCases.click();
        await expect(testCasePage.testCaseHeader).toBeVisible();
    });
});
