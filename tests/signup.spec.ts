import test, {expect} from "@playwright/test";
import {SignUpPage} from "../pageObjs/signup.page";

test.describe("Sign up form tests", () => {
    let signupPage: SignUpPage;
    test.beforeEach(async ({page}) => {
        await page.goto("/login");
    });
    test("should redirect to user details form after entering name and email and should be able to sign up successfully", async ({
        page,
    }) => {
        const nameField = page.locator("[data-qa='signup-name']");
        const emailField = page.locator("[data-qa='signup-email']");
        const signupBtn = page.locator("[data-qa='signup-button']");
        await nameField.fill("Test user");
        await emailField.fill("testuser746@gmail.com");
        await signupBtn.click();
        //redirected to user details form
        const accountInfoHeader = page.locator("//b[text()='Enter Account Information']");
        const nameFieldAgain = page.locator("//input[@value='Test user']");
        const emailFieldAgain = page.locator(
            "//input[@type='text' and @value='testuser746@gmail.com']"
        );
        await expect(accountInfoHeader).toBeVisible();
        await expect(nameFieldAgain).toBeVisible();
        await expect(emailFieldAgain).toBeVisible();
        //filling rest of the data
        const genderRadio = page.locator("//label[@for='id_gender1']");
        const passwordField = page.locator("[data-qa='password']");
        await genderRadio.click();
        await passwordField.fill("Test@1234");
        const dayDropdown = page.locator("//select[@id='days']");
        await dayDropdown.selectOption("10");
        const monthDropdown = page.locator("//select[@id='months']");
        await monthDropdown.selectOption("5");
        const yearDropdown = page.locator("//select[@id='years']");
        await yearDropdown.selectOption("1995");
        await page.locator("//input[@id='newsletter']").click();
        //filling address info
        const firstNameField = page.locator("[data-qa='first_name']");
        const lastNameField = page.locator("[data-qa='last_name']");
        const companyField = page.locator("[data-qa='company']");
        const address1Field = page.locator("[data-qa='address']");
        const address2Field = page.locator("[data-qa='address2']");
        const countryDropdown = page.locator("//select[@id='country']");
        await countryDropdown.selectOption("Canada");
        const stateField = page.locator("[data-qa='state']");
        const cityField = page.locator("[data-qa='city']");
        const zipcodeField = page.locator("[data-qa='zipcode']");
        const mobileNumberField = page.locator("[data-qa='mobile_number']");
        await firstNameField.fill("Test");
        await lastNameField.fill("User");
        await companyField.fill("TestCompany");
        await address1Field.fill("123 Test St");
        await address2Field.fill("Apt 4B");
        await stateField.fill("TestState");
        await cityField.fill("TestCity");
        await zipcodeField.fill("A1B2C3");
        await mobileNumberField.fill("+1234567890");
        //submit the form
        const createAccountBtn = page.locator("[data-qa='create-account']");
        await createAccountBtn.click();
        //verify account creation
        const accountCreatedHeader = page.locator("//b[text()='Account Created!']");
        await expect(accountCreatedHeader).toBeVisible();
    });
    //test("should register a new user successfully", async ({page}) => {});
});
