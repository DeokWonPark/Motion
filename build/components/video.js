var VideoComponent = (function () {
    function VideoComponent(sort, url, title) {
        this.element = document.createElement('li');
        this.element.setAttribute('class', 'media');
        this.title = document.createElement('h1');
        this.title.classList.add("mediaTitle");
        this.title.textContent = title;
        this.closeBtn = document.createElement('button');
        this.closeBtn.classList.add("closeBtn");
        this.closeBtn.textContent = "X";
        if (sort === 'video') {
            var video = document.createElement('iframe');
            video.setAttribute('src', url);
            video.classList.add("itemImg");
            this.element.appendChild(video);
        }
        else {
            var img = document.createElement('img');
            img.setAttribute('src', url);
            img.classList.add("itemImg");
            this.element.appendChild(img);
        }
        this.element.appendChild(this.title);
        this.element.appendChild(this.closeBtn);
    }
    VideoComponent.prototype.attach = function (parent, position) {
        if (position === void 0) { position = 'afterbegin'; }
        parent.insertAdjacentElement(position, this.element);
    };
    return VideoComponent;
}());
export { VideoComponent };
