import { Page } from "@playwright/test";

export class ResultPage {

    readonly page: Page;


    // Where all elements will be initialised
    constructor(page: Page){
        this.page = page;

        // Declare all elements 
       
    }

     // Methods to perform actions in the same page
     async clickOnPlaylist(link:string){
        await this.page.getByRole('link', {name: link}).first().click();
     }
}