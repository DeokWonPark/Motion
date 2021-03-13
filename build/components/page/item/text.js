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
import { BasePageComponentImple } from "../basePage.js";
var TextComponent = (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent(title, body) {
        var _this = this;
        var text = "\n            <div class=\"Text\">\n                <h1 class=\"textTitle\"></h1>\n                <p class=\"textBody\"></p>\n            </div>\n            <button class=\"closeBtn\">X</button>";
        _this = _super.call(this, "section", 'text', text) || this;
        var titles = _this.element.querySelector('.textTitle');
        titles.textContent = title;
        var media = _this.element.querySelector('.textBody');
        media.textContent = body;
        return _this;
    }
    return TextComponent;
}(BasePageComponentImple));
export { TextComponent };
