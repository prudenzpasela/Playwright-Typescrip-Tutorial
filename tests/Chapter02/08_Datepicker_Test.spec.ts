// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling datepicker', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.jqueryui.com/datepicker/');


// Hard coded date
const iframe = page.frameLocator('[class="demo-frame"]');
// await iframe.locator('[id="datepicker"]').fill('01/22/2025');

// Selecting dynamic date
// await iframe.locator('[id="datepicker"]').click();
// await iframe.locator('.ui-datepicker-today').click();

// Select past date
// await iframe.locator('[id="datepicker"]').click();
// await iframe.locator('[title="Prev"]').click();
// await iframe.locator('text=15').click();

// Select future date
await iframe.locator('[id="datepicker"]').click();
await iframe.locator('[title="Next"]').click();
await iframe.locator('text=15').click();

});
