// Import playwright module
import { test, expect } from '@playwright/test';

    // Write a test
    test('Iterating Matching Elements', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.github.com/BakkappaN');

    const repositorylinks = await page.$$('.repo');
    for (const repositorylink of repositorylinks){
       const text =  await repositorylink.textContent();
       console.log(`Text from 1st loop:  ${text}`);
    }

console.log(`==============================`);

    for (let index = 0; index < repositorylinks.length; index++){

        const text  = await repositorylinks[index].textContent();
        console.log(`Text from 2nd loop:  ${text}`);
    }

    const repositorylinks2 = await page.locator('.repo');
    const count = await repositorylinks2.count();


console.log(`==============================`);

    for (let index = 0; index < count; index++){

        const text  = await repositorylinks2.nth(index).textContent();
        console.log(`Text from 3rd loop:  ${text}`); 
    }

    });