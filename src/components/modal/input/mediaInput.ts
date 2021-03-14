import { BasePageComponentImple } from "../../page/basePage.js";

export class MediaInputComponent extends BasePageComponentImple<HTMLDivElement>{
    constructor(){
        const modalInput=`
        <div>
            <h1>Title</h1>
            <input type="text" class="titleInput">
        </div>
        <div class="media">
            <p>URL</p>
            <input type="text" class="desInput">
        </div>`
        super('div','modalItems',modalInput);
    }  
    get title():string{
        const title=this.element.querySelector('.titleInput')! as HTMLInputElement;
        return title.value;
    }
    get info():string{
        const title=this.element.querySelector('.desInput')! as HTMLInputElement;
        return title.value;
    }
}