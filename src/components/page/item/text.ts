import { BasePageComponentImple } from "../basePage.js";

export class TextComponent extends BasePageComponentImple<HTMLLIElement>{
    constructor(title:string,body:string){
        const text=`
            <div class="Text">
                <h1 class="textTitle"></h1>
                <p class="textBody"></p>
            </div>
            <button class="closeBtn">X</button>`
        super("section",'text',text);

        const titles=this.element.querySelector('.textTitle')! as HTMLHeadingElement;
        titles.textContent=title;
        const media=this.element.querySelector('.textBody')! as HTMLParagraphElement;
        media.textContent=body;
    }
}