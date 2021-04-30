import * as Imagesel from "./image_select_component.js";
import * as Proftext from "./profile_text_component.js";
import * as Inptable from "./proficiency_inputtable_component.js";
import * as Carouselsect from "./carousel_input_component.js";
function renderimagesect() {
    Imagesel.renderimgsect();
    setTimeout(function () {
        Imagesel.check_small_image();
    }, 50);
    Proftext.inputrend();
    Inptable.render_input_table();
    Carouselsect.render_carousel();
}
window.addEventListener("load", renderimagesect);