import { test, expect, Locator, Page } from '@playwright/test';
import path from 'path';

test('file uplone', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload",{waitUntil:'domcontentloaded'});

    const filepah = path.resolve('tests/data/Deepak_Y_QA_2026.pdf');
    await page.locator('#file-upload').setInputFiles(filepah);
    await page.locator('#file-submit').click();

});