import { test, expect, Locator, Page } from '@playwright/test';

test('drop down core', async({page, context})=>{

await page.goto("https://www.spicejet.com/");
await page.getByAltText('Add-ons',{exact:true}).hover();
 // 1. Start listening for a new tab BEFORE the click
const popupPromise = context.waitForEvent('page');
await page.getByAltText('Extra Seat',{exact:true}).click();

//3. Now collect the new tab
  const newPage = await popupPromise;
  await newPage.waitForLoadState();

  // 4. Validate the URL in the new tab
  await expect(newPage).toHaveURL(/ExtraSeat/);

  // we can do action if we need here 
  // 5 we close the new tab (optional) of go back to new page 
  await newPage.close();
  await page.bringToFront();
  // 6 contunue on the original page 
  await expect(page).toHaveURL('www.spicejet.com')

//code given by in video 
// try{
//     await page.waitForURL(/ExtraSeat/, {timeout:10000});
//     await expect(page).toHaveURL(/ExtraSeat/);
// }
// catch {
//     const pages= page.context().pages();
//     const others= pages.find(p=>p!==page && /ExtraSeat/.test(p.url()));
//     if(others){
//         await others.waitForLoadState('load');
//         await expect(others).toHaveURL(/ExtraSeat/);
//     } else{
//         await page.goto("https://corporate.spicejet.com/ExtraSeat.aspx");
//     }
// }

});

test("Drag", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.waitForTimeout(4000);
    const source = page.locator('#draggable');
    const traget = page.locator('#droppable');
    await source.dragTo(traget);

});

test("Move", async({page})=>{

 const s1 = page.locator('//div[@id="slider-range"]/span[1]');
 const bb = await s1.boundingBox();
 
});