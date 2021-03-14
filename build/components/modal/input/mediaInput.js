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
import { BasePageComponentImple } from "../../page/basePage.js";
var MediaInputComponent = (function (_super) {
    __extends(MediaInputComponent, _super);
    function MediaInputComponent() {
        var _this = this;
        var modalInput = "\n        <div>\n            <h1>Title</h1>\n            <input type=\"text\" class=\"titleInput\">\n        </div>\n        <div class=\"media\">\n            <p>URL</p>\n            <input type=\"text\" class=\"desInput\">\n        </div>";
        _this = _super.call(this, 'div', 'modalItems', modalInput) || this;
        return _this;
    }
    Object.defineProperty(MediaInputComponent.prototype, "title", {
        get: function () {
            var title = this.element.querySelector('.titleInput');
            return title.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaInputComponent.prototype, "info", {
        get: function () {
            var title = this.element.querySelector('.desInput');
            return title.value;
        },
        enumerable: false,
        configurable: true
    });
    return MediaInputComponent;
}(BasePageComponentImple));
export { MediaInputComponent };
