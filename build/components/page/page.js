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
        _this.element.addEventListener('dragstart', function (ev) { _this.dragstart_handler(ev); });
        _this.element.addEventListener('dragend', function (ev) { _this.dragend_handler(ev); });
        _this.element.addEventListener('dragenter', function (ev) { _this.dragenter_handler(ev); });
        _this.element.addEventListener('dragleave', function (ev) { _this.dragleave_handler(ev); });
        return _this;
    }
    PageItemComponent.prototype.dragstart_handler = function (_) {
        this.notifyDragObservers('start');
    };
    PageItemComponent.prototype.dragend_handler = function (_) {
        this.notifyDragObservers('end');
    };
    PageItemComponent.prototype.dragenter_handler = function (_) {
        this.notifyDragObservers('enter');
    };
    PageItemComponent.prototype.dragleave_handler = function (_) {
        this.notifyDragObservers('leave');
    };
    PageItemComponent.prototype.notifyDragObservers = function (state) {
        this.dragStateListenser && this.dragStateListenser(this, state);
    };
    PageItemComponent.prototype.setOnDragStateListener = function (listener) {
        this.dragStateListenser = listener;
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
        _this.element.addEventListener('dragover', function (ev) { _this.dragover_handler(ev); });
        _this.element.addEventListener('drop', function (ev) { _this.drop_handler(ev); });
        return _this;
    }
    PageComponent.prototype.dragover_handler = function (ev) {
        ev.preventDefault();
    };
    PageComponent.prototype.drop_handler = function (ev) {
        ev.preventDefault();
        if (!this.dropTarget) {
            return;
        }
        if (this.dragTarget && this.dragTarget !== this.dropTarget) {
            this.dropTarget.attach(this.dragTarget, 'beforebegin');
        }
    };
    PageComponent.prototype.addChild = function (element) {
        var _this = this;
        var pageItem = new this.PageItemMaker();
        pageItem.addChild(element);
        pageItem.attachTo(this.element, "afterbegin");
        pageItem.setOnDragStateListener(function (target, state) {
            switch (state) {
                case 'start':
                    _this.dragTarget = target;
                    break;
                case 'end':
                    _this.dragTarget = undefined;
                    break;
                case 'enter':
                    _this.dropTarget = target;
                    break;
                case 'leave':
                    _this.dropTarget = undefined;
                    break;
                default:
                    throw new Error("unsupported state:" + state);
            }
        });
    };
    return PageComponent;
}(BasePageComponentImple));
export { PageComponent };
