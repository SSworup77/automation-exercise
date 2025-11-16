import {expect, Locator, type Page} from "@playwright/test";

class SignUpPage {
    readonly page: Page;
    readonly signupHeader: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupBtn: Locator;
    readonly signupErrorMessage:Locator;
    readonly signupInfoHeader: Locator;
    readonly accountInfoHeader: Locator;
    readonly nameFieldAgain: Locator;
    readonly emailFieldAgain: Locator;
    readonly genderRadio: Locator;
    readonly passwordField: Locator;
    readonly dayDropdown: Locator;
    readonly monthDropdown: Locator;
    readonly yearDropdown: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyField: Locator;
    readonly address1Field: Locator;
    readonly address2Field: Locator;
    readonly countryDropdown: Locator;
    readonly stateField: Locator;
    readonly cityField: Locator;
    readonly zipcodeField: Locator;
    readonly mobileNumberField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupHeader = page.locator("//h2[text()='New User Signup!']");
        this.nameInput = page.locator("[data-qa='signup-name']");
        this.emailInput = page.locator("[data-qa='signup-email']");
        this.signupBtn = page.locator("[data-qa='signup-button']");
        this.signupErrorMessage=page.locator("//p[text()='Email Address already exist!']")
        this.signupInfoHeader = page.locator("//b[text()='Enter Account Information']");
        this.accountInfoHeader = page.locator("//b[text()='Enter Account Information']");
        this.nameFieldAgain = page.locator("//input[@value='Test user']");
        this.emailFieldAgain = page.locator(
            "//input[@type='text' and @value='testuser746@gmail.com']"
        );
        this.genderRadio = page.locator("//label[@for='id_gender1']");
        this.passwordField = page.locator("[data-qa='password']");
        this.dayDropdown = page.locator("//select[@id='days']");
        this.monthDropdown = page.locator("//select[@id='months']");
        this.yearDropdown = page.locator("//select[@id='years']");
        this.firstNameField = page.locator("[data-qa='first_name']");
        this.lastNameField = page.locator("[data-qa='last_name']");
        this.companyField = page.locator("[data-qa='company']");
        this.address1Field = page.locator("[data-qa='address']");
        this.address2Field = page.locator("[data-qa='address2']");
        this.countryDropdown = page.locator("//select[@id='country']");
        this.stateField = page.locator("[data-qa='state']");
        this.cityField = page.locator("[data-qa='city']");
        this.zipcodeField = page.locator("[data-qa='zipcode']");
        this.mobileNumberField = page.locator("[data-qa='mobile_number']");
    }
    async goto() {
        await this.page.goto("/login");
    }
    async fillSignUpForm(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupBtn.click();
    }
}

export {SignUpPage};
