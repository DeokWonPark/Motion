import { BasePageComponent, BasePageComponentImple } from "../page/basePage.js";
import { Composable } from "../page/page.js";

type OnSubmitListener=()=>void;
export class ModalComponent extends BasePageComponentImple<HTMLElement> implements Composable{
    submitListener?:OnSubmitListener;
    constructor(){

        const modal=`
        <div class="Modalbg"></div>
        <div class="Modal">
            <div class="submit"><button class="closeBtn">x</button></div>
            <div class="modalContents"></div>
            <div class="submit"><button class="addBtn">ADD</button></div>
        </div>`
        super('section','ModalBox',modal);
    
        const closeBtn=this.element.querySelector('.closeBtn') ! as HTMLButtonElement;
        closeBtn.onclick=()=>{
            this.element.remove();
        }
        const sumitBtn=this.element.querySelector('.addBtn') ! as HTMLButtonElement;
        sumitBtn.onclick=()=>{
            this.submitListener && this.submitListener();
            this.element.remove();
        }
    }
    setOnSubmitListener(listener:OnSubmitListener){
        this.submitListener=listener;
    }
    addChild(component:BasePageComponent){
        const parentModal=this.element.querySelector('.modalContents')! as HTMLDivElement;
        component.attachTo(parentModal);
    }
}