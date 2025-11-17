import test, {expect} from "@playwright/test";
import {HomePage} from "../pageObjs/home.page";
import {ContactPage} from "../pageObjs/contact.page";

test.describe("Contact Us Page", () => {
    let homePage: HomePage;
    let contactPage: ContactPage;
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });
    test("Should navigate to Contact Us page", async ({page}) => {
        contactPage = new ContactPage(page);
        await homePage.contactUs.click();
        await expect(contactPage.contactHeader).toBeVisible();
    });
    test("Should submit contact us form successfully", async ({page}) => {
        contactPage = new ContactPage(page);
        await homePage.contactUs.click();
        await expect(contactPage.contactHeader).toBeVisible();
        await contactPage.nameInput.fill("Test User");
        await contactPage.emailInput.fill("testuser@gmail.com");
        await contactPage.subjectInput.fill("Test Subject");
        await contactPage.messageInput.fill("This is a test message for contact us form.");
        await contactPage.uploadFileInput.setInputFiles("files/file.txt");
        await expect(contactPage.uploadFileInput).toHaveValue(/file\.txt$/);
        await contactPage.submitBtn.click();
    });
});
