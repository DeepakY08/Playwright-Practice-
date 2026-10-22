import { test, expect } from '@playwright/test';
// npx playwright test                 # run all tests
// npx playwright test login.spec.js   # run one file
// npx playwright test --headed        # see the browser
// npx playwright test --debug         # step through with the Inspector
// npx playwright test --ui            # UI mode

test('frames 1 - fil and verify input fiels', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frameLocator("//frame[@src='frame_1.html']");
    await frame1.locator('//input[@name="mytext1"]').fill("Hi I'm Deepak in frame1 ");

    const frame2 = page.frameLocator('//frame[@src="frame_2.html"]');
    await frame2.locator('//input[@name="mytext2"]').fill("Im in frame 2");


    const frame3= page.frameLocator('//frame[@src="frame_3.html"]');
    await frame3.locator('//input[@name="mytext3"]').fill("Im IN frame 3 yoooo");

    const frame3_childframe = frame3.frameLocator('frame');
    await frame3_childframe.getByRole('radio',{name:'Hi, I am the UI.Vision IDE'}).click();
    




});