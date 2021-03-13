import { BasePageComponentImple } from "../basePage.js";

export class VideoComponent extends BasePageComponentImple<HTMLLIElement>{
    constructor(sort:string, url:string, title:string){

        if(sort==='video'){
            const video=`
                <iframe class="itemImg"></iframe>    
                <h1 class="mediaTitle"></h1>
                <button class="closeBtn">X</button>`;
            super('section','media',video);

            url=this.convertURL(url);
        }
        else{
            const img=`
                <img class="itemImg"></img>
                <h1 class="mediaTitle"></h1>
                <button class="closeBtn">X</button>`;
            super('section','media',img);
        }

        const titles=this.element.querySelector('.mediaTitle')! as HTMLHeadingElement;
        titles.textContent=title;
        const media=this.element.querySelector('.itemImg')! as HTMLElement;
        media.setAttribute('src',url);
    }
    private convertURL(url:string):string{
        const regExp=/^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match=url.match(regExp);
        console.log(match)

        const videoId=match? match[1] || match[2] : undefined;
        if(videoId){
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}