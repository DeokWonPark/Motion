import { MediaInputComponent } from "./components/modal/input/mediaInput.js";
import { TextInputComponent } from "./components/modal/input/textInput.js";
import { ModalComponent } from "./components/modal/modal.js";
import { TextComponent } from "./components/page/item/text.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent } from "./components/page/page.js";
var App = (function () {
    function App(appRoot) {
        var _this = this;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        var imageBtn = document.querySelector('.imgBtn');
        imageBtn.addEventListener('click', function () {
            var modal = new ModalComponent();
            var mediaInput = new MediaInputComponent();
            modal.addChild(mediaInput);
            modal.setOnSubmitListener(function () {
                var imgElement = new VideoComponent("img", mediaInput.info, mediaInput.title);
                _this.page.addChild(imgElement);
            });
            modal.attachTo(appRoot);
        });
        var videoBtn = document.querySelector('.videoBtn');
        videoBtn.addEventListener('click', function () {
            var modal = new ModalComponent();
            var mediaInput = new MediaInputComponent();
            modal.addChild(mediaInput);
            modal.setOnSubmitListener(function () {
                var videoElement = new VideoComponent("video", mediaInput.info, mediaInput.title);
                _this.page.addChild(videoElement);
            });
            modal.attachTo(appRoot);
        });
        var noteBtn = document.querySelector('.noteBtn');
        noteBtn.addEventListener('click', function () {
            var modal = new ModalComponent();
            var textInput = new TextInputComponent();
            modal.addChild(textInput);
            modal.setOnSubmitListener(function () {
                var noteElement = new TextComponent(textInput.title, textInput.info);
                _this.page.addChild(noteElement);
            });
            modal.attachTo(appRoot);
        });
        var taskBtn = document.querySelector('.taskBtn');
        taskBtn.addEventListener('click', function () {
            var modal = new ModalComponent();
            var textInput = new TextInputComponent();
            modal.addChild(textInput);
            modal.setOnSubmitListener(function () {
                var taskElement = new TextComponent(textInput.title, textInput.info);
                _this.page.addChild(taskElement);
            });
            modal.attachTo(appRoot);
        });
    }
    return App;
}());
new App(document.querySelector('.contents'));
