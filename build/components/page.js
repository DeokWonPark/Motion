var PageComponent = (function () {
    function PageComponent() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = "this is Page Component";
    }
    PageComponent.prototype.attachTo = function (parent, position) {
        if (position === void 0) { position = "afterbegin"; }
        parent.insertAdjacentElement(position, this.element);
    };
    return PageComponent;
}());
export { PageComponent };
