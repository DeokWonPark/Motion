import { BasePageComponentImple,BasePageComponent } from "./basePage.js";
import { TextComponent } from "./item/text.js";
import { VideoComponent } from "./item/video.js";

export interface Composable{
    addChild(component:BasePageComponent):void;
}
interface SectionContainer extends Composable,BasePageComponent{

}
type SectionContainerConstructor={
    new ():SectionContainer;
}

export class PageItemComponent extends BasePageComponentImple<HTMLElement> implements Composable{
    constructor(){
        super('li','pageItem','<button class="closeBtn">X</button>');
        const closeBtn=this.element.querySelector('.closeBtn')! as HTMLButtonElement;
        console.log(closeBtn);
        closeBtn.onclick=()=>{
            this.element.remove();
        }
    }
    addChild(component:BasePageComponent){
        component.attachTo(this.element,'afterbegin');
    }
}

export class PageComponent extends BasePageComponentImple<HTMLUListElement> implements Composable{
    constructor(private PageItemMaker:SectionContainerConstructor){
        super("ul",'page');

        const imgElement=new VideoComponent("img","https://file.moyiza.kr/data/moyiza/document_files/images/2017/04/26/33cff99aed5d97fd56ddbe933cbfd1b7.jpg","Celebrity");
        const videoElement=new VideoComponent("video","https://www.youtube.com/watch?v=8pu3yXrNKZw","튜브김민교");
        const textElement=new TextComponent("Motion","React의 중요성");

        this.addChild(imgElement);
        this.addChild(videoElement);
        this.addChild(textElement);
    }
    addChild(element:BasePageComponent){
        const pageItem=new this.PageItemMaker();
        pageItem.addChild(element);
        pageItem.attachTo(this.element);
    }
}