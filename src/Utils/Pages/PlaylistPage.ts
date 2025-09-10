import { expect, Page } from "@playwright/test";

export class PlaylistPage {

    readonly page: Page;


    // Where all elements will be initialised
    constructor(page: Page){
        this.page = page;

        // Declare all elements 

       
    }

     // Methods to perform actions in the same page
     async validatePageTitle(title:string){
        await expect(this.page).toHaveTitle(title);
     }
}