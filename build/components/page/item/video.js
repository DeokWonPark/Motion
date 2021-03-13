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
var VideoComponent = (function (_super) {
    __extends(VideoComponent, _super);
    function VideoComponent(sort, url, title) {
        var _this = this;
        if (sort === 'video') {
            var video = "\n                <iframe class=\"itemImg\"></iframe>    \n                <h1 class=\"mediaTitle\"></h1>";
            _this = _super.call(this, 'section', 'media', video) || this;
            url = _this.convertURL(url);
        }
        else {
            var img = "\n                <img class=\"itemImg\"></img>\n                <h1 class=\"mediaTitle\"></h1>";
            _this = _super.call(this, 'section', 'media', img) || this;
        }
        var titles = _this.element.querySelector('.mediaTitle');
        titles.textContent = title;
        var media = _this.element.querySelector('.itemImg');
        media.setAttribute('src', url);
        return _this;
    }
    VideoComponent.prototype.convertURL = function (url) {
        var regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        var match = url.match(regExp);
        console.log(match);
        var videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return "https://www.youtube.com/embed/" + videoId;
        }
        return url;
    };
    return VideoComponent;
}(BasePageComponentImple));
export { VideoComponent };
