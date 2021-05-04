import * as Imagesel from "./image_select_component.js";
import * as Proftext from "./profile_text_component.js";
import * as Inptable from "./proficiency_inputtable_component.js";
import * as Carouselsect from "./carousel_input_component.js";
import * as Contactinput from "./contact_input_component.js";
function renderimagesect() {
    Imagesel.renderimgsect();
    setTimeout(function () {
        Imagesel.check_small_image();
    }, 5);
    Proftext.inputrend();
    Inptable.render_input_table();
    Carouselsect.render_carousel();
    Contactinput.render_contact_input();
}
var fullinputs;
function full_input_check() {
    var textobj = Proftext.description_text_object;
    //for profile image
    if (Imagesel.profile_backgroundpos_x === undefined || Imagesel.profile_backgroundpos_x === undefined) {
        return;
    }
    //for profile text check
    if (textobj.profile_welcome_textinput == null || textobj.profile_welcome_textinput == '') {
        alert('You have not written your welcoming text!');
        return;
    }
    else {
        if (textobj.profile_nameinput == null || textobj.profile_nameinput == '') {
            alert('You have not written your profile name text!');
            return;
        }
        else {
            if (textobj.profile_titleinput == null || textobj.profile_titleinput == '') {
                alert('You have not written your title(s) text!');
                return;
            }
            else {
                if (textobj.profile_textinput == null || textobj.profile_textinput == '') {
                    alert('You have not written your descriptive text!');
                    return;
                }
            }
        }
    }
    //for table check
    
    /*for carousel
    if () {

    }*/
    //for contact info
    if (Contactinput.contact_inputs.mail == null || Contactinput.contact_inputs.mail == '') {
        alert('You have not provided a mail adress in contacts!');
        return;
    }
    fullinputs = {
        profile_image_data: {
            profile_image_source: Imagesel.currentimg, profile_pos_x: Imagesel.profile_backgroundpos_x,
            profile_pos_y: Imagesel.profile_backgroundpos_y
        },
        profile_text_data: {
            profile_welcoming: textobj.profile_welcome_textinput, profile_name: textobj.profile_nameinput,
            profile_title: textobj.profile_titleinput, profile_fulltext: textobj.profile_textinput
        },
        profile_proficiencies_data: Inptable.talent_inputs,
        profile_carousel_data: Carouselsect.images,
        profile_contact_data: Contactinput.contact_inputs
    };
}
window.addEventListener("load", renderimagesect);