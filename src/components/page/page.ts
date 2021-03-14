import { BasePageComponentImple,BasePageComponent } from "./basePage.js";
import { TextComponent } from "./item/text.js";
import { VideoComponent } from "./item/video.js";

export interface Composable{
    addChild(component:BasePageComponent):void;
}
interface SectionContainer extends Composable,BasePageComponent{
    setOnDragStateListener(listener: OnDragStateListenser<SectionContainer>):void;
    getBoundingRect():DOMRect;
}
type SectionContainerConstructor={
    new ():SectionContainer;
}
type DragState='start' | 'end' | 'enter' | 'leave';
type OnDragStateListenser<T extends BasePageComponent>=(target:T, state:DragState)=>void;

export class PageItemComponent extends BasePageComponentImple<HTMLElement> implements Composable{
    private dragStateListenser?:OnDragStateListenser<PageItemComponent>
    constructor(){
        super('li','pageItem','<button class="closeBtn">X</button>');
        const closeBtn=this.element.querySelector('.closeBtn')! as HTMLButtonElement;
        closeBtn.onclick=()=>{
            this.element.remove();
        }

        this.element.setAttribute("draggable","true");
        this.element.addEventListener('dragstart',(ev:DragEvent)=>{this.dragstart_handler(ev)});
        this.element.addEventListener('dragend',(ev:DragEvent)=>{this.dragend_handler(ev)});
        this.element.addEventListener('dragenter',(ev:DragEvent)=>{this.dragenter_handler(ev)});
        this.element.addEventListener('dragleave',(ev:DragEvent)=>{this.dragleave_handler(ev)});
        
    }
    dragstart_handler(_:DragEvent){
        this.notifyDragObservers('start');
    }
    dragend_handler(_:DragEvent){
        this.notifyDragObservers('end');
    }
    dragenter_handler(_:DragEvent){
        this.notifyDragObservers('enter');
    }
    dragleave_handler(_:DragEvent){
        this.notifyDragObservers('leave');
    }
    notifyDragObservers(state:DragState){
        this.dragStateListenser && this.dragStateListenser(this,state);
    }
    setOnDragStateListener(listener: OnDragStateListenser<PageItemComponent>){
        this.dragStateListenser=listener;
    }
    addChild(component:BasePageComponent){
        component.attachTo(this.element,'afterbegin');
    }
}

export class PageComponent extends BasePageComponentImple<HTMLUListElement> implements Composable{
    private dropTarget?:SectionContainer;
    private dragTarget?:SectionContainer;
    constructor(private PageItemMaker:SectionContainerConstructor){
        super("ul",'page');

        const imgElement=new VideoComponent("img","https://file.moyiza.kr/data/moyiza/document_files/images/2017/04/26/33cff99aed5d97fd56ddbe933cbfd1b7.jpg","Celebrity");
        const videoElement=new VideoComponent("video","https://www.youtube.com/watch?v=8pu3yXrNKZw","튜브김민교");
        const textElement=new TextComponent("Motion","React의 중요성");

        this.addChild(imgElement);
        this.addChild(videoElement);
        this.addChild(textElement);

        this.element.addEventListener('dragover',(ev:DragEvent)=>{this.dragover_handler(ev)})
        this.element.addEventListener('drop',(ev:DragEvent)=>{this.drop_handler(ev)})
    }

    dragover_handler(ev:DragEvent){
        ev.preventDefault();
    }
    drop_handler(ev:DragEvent){
        ev.preventDefault();
        //위치변경
        if(!this.dropTarget){
            return;
        }
        if(this.dragTarget && this.dragTarget!==this.dropTarget){
            const dropY=ev.clientY;
            const srcElement=this.dragTarget.getBoundingRect().top;
            this.dropTarget.attach(this.dragTarget,dropY<srcElement?'beforebegin':'afterend');
        }
    }
    addChild(element:BasePageComponent){
        const pageItem=new this.PageItemMaker();
        pageItem.addChild(element);
        pageItem.attachTo(this.element,"afterbegin");
        pageItem.setOnDragStateListener((target:SectionContainer,state:DragState)=>{
            switch(state){
                case 'start':
                    this.dragTarget=target;
                    break;
                case 'end':
                    this.dragTarget=undefined;
                    break;
                case 'enter':
                    this.dropTarget=target;
                    break;
                case 'leave':
                    this.dropTarget=undefined;
                    break;
                default:
                    throw new Error(`unsupported state:${state}`);
            }
        })
    }
    getBoundingRect():DOMRect{
        return this.element.getBoundingClientRect();
    }
}