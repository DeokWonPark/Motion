import { MediaInputComponent } from "./components/modal/input/mediaInput.js";
import { TextInputComponent } from "./components/modal/input/textInput.js";
import { mediaInputI, ModalComponent } from "./components/modal/modal.js";
import { BasePageComponent } from "./components/page/basePage.js";
import { TextComponent } from "./components/page/item/text.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
type InputConstructor<T= mediaInputI & BasePageComponent>={
    new ():T;
}
class App{
    private readonly page:BasePageComponent & Composable;
    constructor(private appRoot:HTMLElement){
        this.page=new PageComponent(PageItemComponent); //dependuncy injection필요
        this.page.attachTo(appRoot);

        //Add Image
        this.bindElementToModal<MediaInputComponent>(
            '.imgBtn',
            MediaInputComponent,
            (input:MediaInputComponent)=> new VideoComponent("img",input.info,input.title));

        //Add Video
        this.bindElementToModal<MediaInputComponent>(
            '.videoBtn',
            MediaInputComponent,
            (input:MediaInputComponent)=> new VideoComponent("video",input.info,input.title));


        //Add Note
        this.bindElementToModal<TextInputComponent>(
            '.noteBtn',
            TextInputComponent,
            (input:TextInputComponent)=> new TextComponent(input.title,input.info));


        //Add Task
        this.bindElementToModal<TextInputComponent>(
            '.taskBtn',
            TextInputComponent,
            (input:TextInputComponent)=> new TextComponent(input.title,input.info));
    }

    private bindElementToModal<T extends mediaInputI & BasePageComponent>(
        ButtonType:string,
        modalInputComponent:InputConstructor<T>,
        makeComponent: (input:T)=>BasePageComponent,
        ){
        const elementBtn=document.querySelector(ButtonType)! as HTMLButtonElement;
        elementBtn.addEventListener('click',()=>{
            const modal=new ModalComponent();
            const mediaInput=new modalInputComponent();
            modal.addChild(mediaInput);

            modal.setOnSubmitListener(()=>{
                const imgElement=makeComponent(mediaInput);
                this.page.addChild(imgElement);
            });
            modal.attachTo(this.appRoot);
        });
    }
}

new App(document.querySelector('.contents')! as HTMLElement);


