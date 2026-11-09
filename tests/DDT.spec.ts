import { test, expect } from '@playwright/test';

type LoginData ={
    username:string;
    password:string;
    expectedurl?:string;
    expectedelockeduser?:string;
}

//to creat an arry for the test data 
const logindata:LoginData[]=[
    {
        username:'standard_user',
        password:'secret_sauce',
        expectedurl:'https://www.saucedemo.com/inventory.html',
    },{
        username:'locked_out_user',
        password:'secret_sauce',
        expectedelockeduser:'Epic sadface: Sorry, this user has been locked out.',
    }
];

//write a for loop for data search 
for(const data of logindata){
    test(`login test for ${data.username}`, async({page})=>{
        await page.goto('https://www.saucedemo.com/');
        const userinput = page.locator('#user-name');
        const passwordinput = page.locator('#password');
        const loginbutton = page.locator('#login-button');

        await expect(userinput).toBeVisible();
        await expect(passwordinput).toBeVisible();
        await expect(loginbutton).toBeVisible();

        await userinput.fill(data.username);
        await passwordinput.fill(data.password);
        await loginbutton.click();

        if(data.expectedelockeduser){
            const errormessage = page.locator('//h3[@data-test="error"]');
            await expect(errormessage).toBeVisible();
            await expect(errormessage).toHaveText(data.expectedelockeduser);
        }

    });
};


