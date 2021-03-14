var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BasePageComponentImple } from "./basePage.js";
import { TextComponent } from "./item/text.js";
import { VideoComponent } from "./item/video.js";
var PageItemComponent = (function (_super) {
    __extends(PageItemComponent, _super);
    function PageItemComponent() {
        var _this = _super.call(this, 'li', 'pageItem', '<button class="closeBtn">X</button>') || this;
        var closeBtn = _this.element.querySelector('.closeBtn');
        closeBtn.onclick = function () {
            _this.element.remove();
        };
        _this.element.setAttribute("draggable", "true");
        _this.element.addEventListener('dragstart', function () { _this.dragstart_handler(); });
        return _this;
    }
    PageItemComponent.prototype.dragstart_handler = function () {
        console.log("dragging");
        return true;
    };
    PageItemComponent.prototype.addChild = function (component) {
        component.attachTo(this.element, 'afterbegin');
    };
    return PageItemComponent;
}(BasePageComponentImple));
export { PageItemComponent };
var PageComponent = (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent(PageItemMaker) {
        var _this = _super.call(this, "ul", 'page') || this;
        _this.PageItemMaker = PageItemMaker;
        var imgElement = new VideoComponent("img", "https://file.moyiza.kr/data/moyiza/document_files/images/2017/04/26/33cff99aed5d97fd56ddbe933cbfd1b7.jpg", "Celebrity");
        var videoElement = new VideoComponent("video", "https://www.youtube.com/watch?v=8pu3yXrNKZw", "튜브김민교");
        var textElement = new TextComponent("Motion", "React의 중요성");
        _this.addChild(imgElement);
        _this.addChild(videoElement);
        _this.addChild(textElement);
        _this.element.addEventListener('drop', function (event) {
            console.log('drop');
            event.preventDefault();
        });
        return _this;
    }
    PageComponent.prototype.addChild = function (element) {
        var pageItem = new this.PageItemMaker();
        pageItem.addChild(element);
        pageItem.attachTo(this.element, "afterbegin");
    };
    return PageComponent;
}(BasePageComponentImple));
export { PageComponent };
