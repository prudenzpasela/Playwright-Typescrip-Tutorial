// Import playwright module
//import { test, expect } from '@playwright/test';
// import { HomePage } from '../../src/Utils/Pages/HomePage';
// import { ResultPage } from '../../src/Utils/Pages/ResultPage';
// import { PlaylistPage } from '../../src/Utils/Pages/PlaylistPage';
import { test } from '../../src/Utils/Fixture/testFixture'



// Write a test
test('Implementing Optimized POM fixture', async ({ page, homePage, resultPage, playlistPage }) => {

    console.log('Test Execution Started...');

    await page.setViewportSize({ width: 1948, height: 1313 });

    // Create Object of Homepage class
   // const homePage = new HomePage(page)
    await homePage.goToURL();
    await homePage.searchwithKeywords(`${process.env.SEARCH_KEYWORD}`);

    // Create object of Resultpage class
   // const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

    //Create object of Playlistpage class
   // const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORD}`+'☑️ - YouTube');

    console.log('Test Execution Ended...');
});

