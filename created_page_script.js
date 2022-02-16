import * as userProfile from "./created_profile_component.js";
import * as userProfTable from "./created_proficiencies_component.js";
import * as userCarousel from './created_carousel_component.js';
import * as userContact from "./created_contact_component.js";
function full_page_render() {
    userProfile.render_created_profile();
    userProfTable.render_proftable();
    userCarousel.render_carousel();
    userContact.render_contact_input();
}

window.addEventListener("load", full_page_render);