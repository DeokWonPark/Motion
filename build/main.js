import { MediaInputComponent } from "./components/modal/input/mediaInput.js";
import { TextInputComponent } from "./components/modal/input/textInput.js";
import { ModalComponent } from "./components/modal/modal.js";
import { TextComponent } from "./components/page/item/text.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
var App = (function () {
    function App(appRoot) {
        this.appRoot = appRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToModal('.imgBtn', MediaInputComponent, function (input) { return new VideoComponent("img", input.info, input.title); });
        this.bindElementToModal('.videoBtn', MediaInputComponent, function (input) { return new VideoComponent("video", input.info, input.title); });
        this.bindElementToModal('.noteBtn', TextInputComponent, function (input) { return new TextComponent(input.title, input.info); });
        this.bindElementToModal('.taskBtn', TextInputComponent, function (input) { return new TextComponent(input.title, input.info); });
    }
    App.prototype.bindElementToModal = function (ButtonType, modalInputComponent, makeComponent) {
        var _this = this;
        var elementBtn = document.querySelector(ButtonType);
        elementBtn.addEventListener('click', function () {
            var modal = new ModalComponent();
            var mediaInput = new modalInputComponent();
            modal.addChild(mediaInput);
            modal.setOnSubmitListener(function () {
                var imgElement = makeComponent(mediaInput);
                _this.page.addChild(imgElement);
            });
            modal.attachTo(_this.appRoot);
        });
    };
    return App;
}());
new App(document.querySelector('.contents'));
