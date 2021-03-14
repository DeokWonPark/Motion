import { MediaInputComponent } from "./components/modal/input/mediaInput.js";
import { TextInputComponent } from "./components/modal/input/textInput.js";
import { ModalComponent } from "./components/modal/modal.js";
import { BasePageComponent } from "./components/page/basePage.js";
import { TextComponent } from "./components/page/item/text.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";
class App{
    private readonly page:BasePageComponent & Composable;
    constructor(appRoot:HTMLElement){
        this.page=new PageComponent(PageItemComponent); //dependuncy injection필요
        this.page.attachTo(appRoot);

        //Add Image
        const imageBtn=document.querySelector('.imgBtn')! as HTMLButtonElement;
        imageBtn.addEventListener('click',()=>{
            const modal=new ModalComponent();
            const mediaInput=new MediaInputComponent();
            modal.addChild(mediaInput);

            modal.setOnSubmitListener(()=>{
                const imgElement=new VideoComponent("img",mediaInput.info,mediaInput.title);
                this.page.addChild(imgElement);
            });
            modal.attachTo(appRoot);
        });

        //Add Video
        const videoBtn=document.querySelector('.videoBtn')! as HTMLButtonElement;
        videoBtn.addEventListener('click',()=>{
            const modal=new ModalComponent();
            const mediaInput=new MediaInputComponent();
            modal.addChild(mediaInput);

            modal.setOnSubmitListener(()=>{
                const videoElement=new VideoComponent("video",mediaInput.info,mediaInput.title);
                this.page.addChild(videoElement);
            });
            modal.attachTo(appRoot);
        });

        //Add Note
        const noteBtn=document.querySelector('.noteBtn')! as HTMLButtonElement;
        noteBtn.addEventListener('click',()=>{
            const modal=new ModalComponent();
            const textInput=new TextInputComponent();
            modal.addChild(textInput);

            modal.setOnSubmitListener(()=>{
                const noteElement=new TextComponent(textInput.title,textInput.info);
                this.page.addChild(noteElement);
            });
            modal.attachTo(appRoot);
        });

        //Add Task
        const taskBtn=document.querySelector('.taskBtn')! as HTMLButtonElement;
        taskBtn.addEventListener('click',()=>{
            const modal=new ModalComponent();
            const textInput=new TextInputComponent();
            modal.addChild(textInput);

            modal.setOnSubmitListener(()=>{
                const taskElement=new TextComponent(textInput.title,textInput.info);
                this.page.addChild(taskElement);
            });
            modal.attachTo(appRoot);
        });
    }
}

new App(document.querySelector('.contents')! as HTMLElement);


