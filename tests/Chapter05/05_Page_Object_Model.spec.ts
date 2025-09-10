// Import playwright module
import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/Utils/Pages/HomePage';
import { ResultPage } from '../../src/Utils/Pages/ResultPage';
import { PlaylistPage } from '../../src/Utils/Pages/PlaylistPage';



// Write a test
test('Page Object Model', async ({ page }) => {

    console.log('Test Execution Started');

    await page.setViewportSize({ width: 640, height: 480 });

    // Create Object of Homepage class
    const homePage = new HomePage(page)
    await homePage.goToURL();
    await homePage.searchwithKeywords(`${process.env.SEARCH_KEYWORD}`);

    // Create object of Resultpage class
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

    //Create object of Playlistpage class
    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORD}`+'☑️ - YouTube');
});

