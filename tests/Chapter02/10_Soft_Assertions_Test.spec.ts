// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Soft Assertions', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.youtube.com');

// Visible
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();

// Editable
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable();

// Enabled
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled();

// Empty
    await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEmpty();

// Verify URL
    await page.getByPlaceholder('Search', {exact: true}).first().click();
    await page.getByPlaceholder('Search', {exact: true}).first().fill('playwright by testers talk');
    await page.getByPlaceholder('Search', {exact: true}).first().press('Enter');
    await expect (page).toHaveURL('https://www.youtube.com/results?search_query=playwright+by+testers+talk');

// Verify Page Title with soft assertion
    await expect.soft(page).toHaveTitle('playwright by testers talk - YouTubes');

// Verify Text
    await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched');

// Verify Number of Elements
    await expect(page.locator('span[id="title"]')).toHaveCount(1);

// Verify disabled
    // await expect(page.locator('span[id="title"]')).toBeDisabled();
});