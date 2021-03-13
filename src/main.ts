

import { BasePageComponent } from "./components/page/basePage.js";
import { Composable, PageComponent } from "./components/page/page.js";
class App{
    private readonly page:BasePageComponent & Composable;
    constructor(appRoot:HTMLElement){
        this.page=new PageComponent(); //dependuncy injection필요
        this.page.attachTo(appRoot);
    }
}

new App(document.querySelector('.contents')! as HTMLElement);


