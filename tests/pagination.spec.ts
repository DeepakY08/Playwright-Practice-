import { test, expect, Locator, Page } from '@playwright/test';

test('Dynmic Table', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const table = page.locator('#productTable');
    const colums = table.locator('thead tr th');
    await expect(colums).toHaveCount(4);
    const row= table.locator('tbody tr');
    await expect(row).toHaveCount(5);

    await selectproduct(row,page,'Tablet');


    // to get the total row count and data in the table  

    for(let i=0; i <await row.count(); i++){
        const rows = row.nth(i)
        const tds = rows.locator('td');

        for(let j=0; j< await tds.count()-1; j++){
            console.log(await tds.nth(j).textContent());
        }


    }

    const pages =  page.locator(".pagination li a");
    for (let p=0; p<await pages.count(); p++){
        if (p>0){
            await pages.nth(p).click();
            await page.waitForTimeout(2000);
        }
    }




});



async function selectproduct(rows:Locator,page:Page,name:string) {
    const matchedRow = rows.filter({ hasText: name });

    const count = await matchedRow.count();

    if (count > 0 ){
        await matchedRow.locator('//input[@type="checkbox"]').click();
        console.log("{'$name'} not found and selected");
        
    }
    else{

        console.log("{'$name'} not was not found");
    }
    

    
}