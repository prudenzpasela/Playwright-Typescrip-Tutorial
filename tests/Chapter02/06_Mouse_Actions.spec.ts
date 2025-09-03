// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Mouse Actions', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/search?q=playwright+by+testtalk');

// // left button click
// await page.getByRole('link', { name: 'Playwright by Testers Talk☑️'}).first().click({button: 'left'});

// // middle button click
// await page.getByRole('link', { name: 'Playwright by Testers Talk☑️'}).first().click({button: 'middle'});

// // right button click
// await page.getByRole('link', { name: 'Playwright by Testers Talk☑️'}).first().click({button: 'right'});

// Mouse over
await page.getByLabel('Search by voice').hover();

// Double click
await page.getByLabel('Search by voice').dblclick();



});

