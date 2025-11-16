import test, {expect} from "@playwright/test";
import {LoginPage} from "../pageObjs/login.page";
import {HomePage} from "../pageObjs/home.page";
import dotenv from "dotenv";

dotenv.config();
test.describe("Login tests", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });
    test("The home page should be visible", async ({page}) => {
        await expect(homePage.logo).toBeVisible();
        await expect(homePage.homePageIcon).toBeVisible();
        await expect(homePage.homepageText.first()).toBeVisible();
    });
    test("Should be able to navigate to the login page", async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });
    test("should login with valid credentials", async ({page}) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        await loginPage.goto();
        await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
        await expect(page.locator("//b['Test user']")).toBeVisible();
        await expect(homePage.userStatus).toBeVisible();
        await expect(page.locator("//a/b")).toHaveText(process.env.USER_NAME!);
    });
    test("should not login with invalid credentials", async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("testuser746@gmail.com", "WrongPassword");
        await expect(loginPage.loginErrorMessage).toBeVisible();
    });
    test("should log out sucessfully", async ({page}) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);
        await expect(page.locator("//b['Test user']")).toBeVisible();
        await expect(homePage.userStatus).toBeVisible();
        await expect(page.locator("//a/b")).toHaveText(process.env.USER_NAME!);
        await homePage.logoutBtn.click();
        await expect(loginPage.loginHeader).toBeVisible();
    });
});
