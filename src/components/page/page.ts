import { BasePageComponentImple } from "./basePage.js";
import { TextComponent } from "./item/text.js";
import { VideoComponent } from "./item/video.js";

class PageItemComponent extends BasePageComponentImple<HTMLElement>{
    constructor(){
        super('li','pageItem','<button class="closeBtn">X</button>');
    }
    addChild(child:BasePageComponentImple<HTMLElement>){
        console.log(child);
        const pageItem=this.element.querySelector('.pageItem')! as HTMLElement;
        child.attachTo(pageItem);
    }
}

export class PageComponent extends BasePageComponentImple<HTMLUListElement>{
    constructor(){
        super("ul",'page');

        const videoElement=new VideoComponent("img","https://file.moyiza.kr/data/moyiza/document_files/images/2017/04/26/33cff99aed5d97fd56ddbe933cbfd1b7.jpg","Celebrity");
        const temp=new VideoComponent("video","https://www.youtube.com/watch?v=8pu3yXrNKZw","튜브김민교");
        const textElement=new TextComponent("Motion","React의 중요성");

        const pageItem=new PageItemComponent();
        pageItem.addChild(videoElement);
        pageItem.addChild(temp);
        pageItem.addChild(textElement);

        pageItem.attachTo(this.element);

        //videoElement.attachTo(this.element);
        //temp.attachTo(this.element);
        //textElement.attachTo(this.element);
    }
}