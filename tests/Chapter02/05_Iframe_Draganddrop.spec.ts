// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Iframes drag and drop elements in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://jqueryui.com/droppable/');

// Specify the iframe

const iframe = page.frameLocator('[class="demo-frame"]')

// Drag element
const dragElement = iframe.locator('[id="draggable"]');

// Drop element
const dropElement = iframe.locator('[id="draggable"]');

await dragElement.dragTo(dropElement);


});

