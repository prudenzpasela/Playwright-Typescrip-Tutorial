// Import playwright module
import { test, expect } from '@playwright/test';


// Write a test
test('Handling Alert Popups', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // to display the alert popup
    page.once('dialog', dialog => {
        dialog.accept(); // Use this to accept the alert
        //dialog.dismiss(); // Use this to cancel the alert
        console.log(`Alert message: ${dialog.message()}`);
    })

    await page.getByText('See an example alert', {exact: true}).click();

});

test('Handling Alert Popup Window', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // to display the alert popup
    page.once('dialog', dialog => {
        dialog.accept(); // Use this to accept the alert
        //dialog.dismiss(); // Use this to cancel the alert
        console.log(`Alert message: ${dialog.message()}`);
        console.log(`Alert type: ${dialog.type()}`);
    })

    await page.getByText('See an example alert', {exact: true}).click();

});

test('Handling Alert Popup Confirm', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // to display the alert popup
    page.once('dialog', dialog => {
        //dialog.accept(); // Use this to accept the alert
        dialog.dismiss(); // Use this to cancel the alert
        console.log(`Alert message: ${dialog.message()}`);
        console.log(`Alert type: ${dialog.type()}`);
    })

    await page.getByText('See a sample confirm', {exact: true}).click();

});

test('Handling Alert Popup Prompt', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // to display the alert popup
    page.once('dialog', async(dialog) => {
        
        console.log(`Alert message: ${dialog.message()}`);
        await dialog.accept('Playwright Test');
        console.log(`Alert type: ${dialog.type()}`);
    })

    await page.getByText('See a sample prompt', {exact: true}).click();

});