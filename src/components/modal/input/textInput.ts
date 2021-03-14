import { BasePageComponentImple } from "../../page/basePage.js";
import { mediaInputI } from "../modal.js";

export class TextInputComponent extends BasePageComponentImple<HTMLDivElement> implements mediaInputI{
    constructor(){
        const modalInput=`
        <div>
            <h1>Title</h1>
            <input type="text" class="titleInput">
        </div>
        <div class="text">
            <p>Body</p>
            <textarea class="desInput"></textarea>
        </div>`
        super('div','modalItems',modalInput);
    }  
    get title():string{
        const title=this.element.querySelector('.titleInput')! as HTMLInputElement;
        return title.value;
    }
    get info():string{
        const title=this.element.querySelector('.desInput')! as HTMLTextAreaElement;
        return title.value;
    }
}