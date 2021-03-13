var TextComponent = (function () {
    function TextComponent(title, body) {
        this.element = document.createElement('li');
        this.element.classList.add("text");
        var titles = document.createElement('h1');
        titles.classList.add('textTitle');
        titles.textContent = title;
        var bodys = document.createElement('p');
        bodys.classList.add('textBody');
        bodys.textContent = body;
        this.content = document.createElement('div');
        this.content.classList.add("Text");
        this.content.appendChild(titles);
        this.content.appendChild(bodys);
        this.element.appendChild(this.content);
        this.closeBtn = document.createElement('button');
        this.closeBtn.classList.add("closeBtn");
        this.closeBtn.textContent = "X";
        this.element.appendChild(this.closeBtn);
    }
    TextComponent.prototype.attach = function (parent, position) {
        if (position === void 0) { position = 'beforeend'; }
        parent.insertAdjacentElement(position, this.element);
    };
    return TextComponent;
}());
export { TextComponent };
