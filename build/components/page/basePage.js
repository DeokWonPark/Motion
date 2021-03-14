var BasePageComponentImple = (function () {
    function BasePageComponentImple(parentTag, parentClass, childElement) {
        var html = document.createElement(parentTag);
        html.classList.add(parentClass);
        if (childElement) {
            html.innerHTML = childElement;
        }
        this.element = html;
    }
    BasePageComponentImple.prototype.attachTo = function (parent, position) {
        if (position === void 0) { position = "beforeend"; }
        parent.insertAdjacentElement(position, this.element);
    };
    BasePageComponentImple.prototype.attach = function (component, position) {
        component.attachTo(this.element, position);
    };
    return BasePageComponentImple;
}());
export { BasePageComponentImple };
