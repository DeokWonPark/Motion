import { TextComponent } from "./text.js";
import { VideoComponent } from "./video.js";
var PageComponent = (function () {
    function PageComponent() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.videoElement = new VideoComponent("img", "https://file.moyiza.kr/data/moyiza/document_files/images/2017/04/26/33cff99aed5d97fd56ddbe933cbfd1b7.jpg", "Celebrity");
        this.temp = new VideoComponent("video", "https://www.youtube.com/embed/c2OYoLGv8AU", "튜브김민교");
        this.textElement = new TextComponent("Motion", "React의 중요성");
        this.videoElement.attach(this.element);
        this.temp.attach(this.element);
        this.textElement.attach(this.element);
    }
    PageComponent.prototype.attachTo = function (parent, position) {
        if (position === void 0) { position = "beforeend"; }
        parent.insertAdjacentElement(position, this.element);
    };
    return PageComponent;
}());
export { PageComponent };
