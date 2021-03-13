export interface BasePageComponent{
    attachTo(parent:HTMLElement,position?:InsertPosition):void;
}

export class BasePageComponentImple<T extends HTMLElement> implements BasePageComponent{
    protected readonly element:T;
    constructor(parentTag:string,parentClass:string,childElement?:string){
        const html=document.createElement(parentTag);
        html.classList.add(parentClass);
        if(childElement){
            html.innerHTML=childElement;
        }
        this.element=html! as T;
    }
    attachTo(parent:HTMLElement, position:InsertPosition="beforeend"){
        parent.insertAdjacentElement(position,this.element)
    }
} 