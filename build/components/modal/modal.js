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
import { BasePageComponentImple } from "../page/basePage.js";
var ModalComponent = (function (_super) {
    __extends(ModalComponent, _super);
    function ModalComponent() {
        var _this = this;
        var modal = "\n        <div class=\"Modalbg\"></div>\n        <div class=\"Modal\">\n            <div class=\"submit\"><button class=\"closeBtn\">x</button></div>\n            <div class=\"modalContents\"></div>\n            <div class=\"submit\"><button class=\"addBtn\">ADD</button></div>\n        </div>";
        _this = _super.call(this, 'section', 'ModalBox', modal) || this;
        var closeBtn = _this.element.querySelector('.closeBtn');
        closeBtn.onclick = function () {
            _this.element.remove();
        };
        var sumitBtn = _this.element.querySelector('.addBtn');
        sumitBtn.onclick = function () {
            _this.submitListener && _this.submitListener();
            _this.element.remove();
        };
        return _this;
    }
    ModalComponent.prototype.setOnSubmitListener = function (listener) {
        this.submitListener = listener;
    };
    ModalComponent.prototype.addChild = function (component) {
        var parentModal = this.element.querySelector('.modalContents');
        component.attachTo(parentModal);
    };
    return ModalComponent;
}(BasePageComponentImple));
export { ModalComponent };
