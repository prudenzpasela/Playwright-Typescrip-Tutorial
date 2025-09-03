// Import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('Running before all tests...');
});

test.beforeEach(async ({page}) => {
    console.log('Running before each tests...');
    await page.goto('https://www.google.com');
});

test.afterEach(async () => {
    console.log('Running after each tests...');
});

test.afterAll(async () => {
    console.log('Running after all tests...');
});


// Write 1st test
test('Test 1', async ({ page }) => {

    console.log('test 1 started');
    // Go to URL
    //await page.goto('https://www.google.com');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // // Click on the playlist
    // await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ YouTube · Testers Talk 25.5K+ followers' }).first().click();

    // // Validate webpage title
    // await expect(page).toHaveTitle('Playwright TypeScript Test - YouTube');


});

// Write 2nd test
test('Test 2', async ({ page }) => {

    console.log('test 2 started');
    // Go to URL
    await page.goto('https://www.google.com');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // // Click on the playlist
    // await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ YouTube · Testers Talk 25.5K+ followers' }).first().click();

    // // Validate webpage title
    // await expect(page).toHaveTitle('Playwright TypeScript Test - YouTube');

});