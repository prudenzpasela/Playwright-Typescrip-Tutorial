import { test } from '../../src/Utils/Fixture/testFixture'



// Write a test
test('Run Based on Environment', async ({ page, homePage, resultPage, playlistPage, testData }) => {


    // Create Object of Homepage class
     await homePage.goToURL();
     await homePage.searchwithKeywords(String(testData.Module1TestData?.Skill1));

    // // Create object of Resultpage class
    await resultPage.clickOnPlaylist(String(testData.Module1TestData?.Skill1));

    // //Create object of Playlistpage class
    await playlistPage.validatePageTitle(String(testData.Module1TestData?.Skill1)+'☑️ - YouTube');

    console.log('Test Execution Ended...');
    console.log(`Skill: ${String(testData.Module1TestData?.Skill1)}`);
    console.log(`Skill: ${String(testData.Module1TestData?.Skill2)}`);
    console.log(`Skill: ${String(testData.Module1TestData?.Skill3)}`);
});

