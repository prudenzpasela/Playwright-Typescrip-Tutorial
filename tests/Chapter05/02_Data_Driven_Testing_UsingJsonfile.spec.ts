// Import playwright module
import { test, expect } from '@playwright/test';

// Import test data from JSON file
import testData from '../../test-data/qa/testdata.json';

// Define test data structure
type TestData = 
{
    TestdataSet1:{
        Skill1: string,
        Skill2: string

    },
     TestdataSet2:{
        Skill1: string,
        Skill2: string

    }
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData){

    const skill = typedTestData[dataSetName as keyof TestData];

    // Write a test
test(`Data Driven Testing Using JSON File ${skill.Skill2}`, async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill(skill.Skill2);
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on the playlist
    await page.getByRole('link', { name: skill.Skill2}).first().click();

    // Validate webpage title
    await expect(page).toHaveTitle(skill.Skill2+'☑️ - YouTube');
});

    
}


