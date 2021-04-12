import * as Imagesel from "./image_select_component.js";

function renderimagesect() {
    Imagesel.renderimgsect();
    setTimeout(function () {
        Imagesel.check_small_image();
    }, 100);
}
window.addEventListener("load", renderimagesect);