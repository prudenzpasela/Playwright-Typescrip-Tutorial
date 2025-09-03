// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Dropdown List', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.facebook.com');

    await page.getByRole('button', { name: 'Create New Account' }).click();

// Select dropdown using value
    await page.getByLabel('Month').selectOption('3');

// Select dropdown using visible text
    await page.getByLabel('Month').selectOption('Aug');

// Validate all the options from the dropdown
    await expect(page.locator('#month > option')).toHaveText(['Jann', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

});

