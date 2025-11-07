import test from "@playwright/test";
import { LoginPage } from "../pageObjs/login.page";

test.describe("Login tests",()=>{
    let loginPage:LoginPage
    test.beforeEach(async({page})=>{
        loginPage=new LoginPage(page)
        await loginPage.goto()
    })
    test("User should be able to login with valid credentials",async({page})=>{
        
    })
})