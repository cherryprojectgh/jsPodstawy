var globalTooltip = null;

function assignEvents(elems, type, event) {
    for(var i = 0; i < elems.length; i++) {
        elems[i].addEventListener(type, event, false);
    }
}

function createTooltip(text, options) {
    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.classList.add("hidden");
    tooltip.appendChild(document.createTextNode(text));
    document.body.appendChild(tooltip);
    tooltip.style.left = options.x + (options.w/2) - (tooltip.offsetWidth/2) + "px";
    tooltip.style.top = options.y - tooltip.offsetHeight - 10 + "px";
    tooltip.classList.remove("hidden");
    globalTooltip = tooltip;
}

function showToolTip(e) {
    var options = {
        w: e.target.offsetWidth,
        x: e.target.offsetLeft,
        y: e.target.offsetTop,
    };

    var text = e.target.getAttribute("title");
    createTooltip(text, options);
    e.target.removeAttribute("title");
}

function removeToolTip(e) {
    e.target.setAttribute("title", globalTooltip.textContent)
    globalTooltip.parentNode.removeChild(globalTooltip);

}

function init(elems) {
    assignEvents(elems, "mouseenter", showToolTip);
    assignEvents(elems, "mouseleave", removeToolTip);
}

window.t00ltip = init;
