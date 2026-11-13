import { test, expect } from '@playwright/test';

import * as fs from 'fs';

type RegData={
        
        firstname:string;
        lastname:string;
        email:string;
        telephone:string;
        password:string;
        scricbeNewsLetter: 'Yes' | 'no';
   }

   const registrationdata:RegData[] =
   JSON.parse(fs.readFileSync('tests/data/register.json','utf-8'));

   for (const user of registrationdata){
         test(`Regrestion data from json file ${user.firstname} ${user.lastname} `, async({page})=>
                {
                        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
                        await page.getByRole('textbox',{name:'First Name'}).fill(user.firstname);
                        await page.getByRole('textbox',{name:'Last Name'}).fill(user.lastname);
                        await page.getByRole('textbox',{name:'E-Mail'}).fill(user.email);
                        await page.getByRole('textbox',{name:'Telephone'}).fill(user.telephone);
                        // await page.getByRole('textbox',{name:'Password'}).fill(user.password);
                        if(user.scricbeNewsLetter == 'Yes'){
                                await page.getByLabel('Yes').check();
                        }
                        else
                        {
                                await page.getByLabel('No').check();
                        }


                        /// updated 

         });
   };

   

