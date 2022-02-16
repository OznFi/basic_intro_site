'use strict';
var profile_image_object = {
    image_source: 'images/plague_doc.jfif',
    image_translate_x: -500,
    image_translate_y: -500,
};
var profile_text_object = {
    profile_welcome_textinput:"Welcome To My Page",
    profile_nameinput: 'Eric Summer',
    profile_titles: 'Titles',
    profile_textinput:'Yoyo'
};//here goes the fetched profile info

function Userprofile(props) {

    return <div id="user_profile_sectioncomp">
        <h1 id="user_welcome_text">{props.profiletext.profile_welcome_textinput}</h1>
        <div id="user_info_container">
            <Userprofilepicture profileimage={props.profileimage} />
            <Userprofiletext profiletexts={props.profiletext} />
        </div>
    </div>;
}
function Userprofilepicture(props) {
    var transformstyle = {
        transform: 'translate(' + props.profileimage.image_translate_x + 'px, ' + props.profileimage.image_translate_y+'px)'
    }
    return <div id="user_profile_picture">
        <div id="user_profile_image_container">
            <div id="profile_image_movement" style={transformstyle}>
                <img src={props.profileimage.image_source} />
            </div>
        </div>
    </div>;
}
function Userprofiletext(props) {

    return <div id='user_profile_description'>
        <h2>{props.profiletexts.profile_nameinput}</h2>
        <Usertitles titles={props.profiletexts.profile_titleinput}/>
        <div id="user_profile_longtext">
            <p>{props.profiletexts.profile_textinput}</p>
        </div>
    </div>;
}
function Usertitles(props) {
    //this is gonna need a lot more code
    return <div>
        {props.titles}
    </div>;
}

function render_created_profile() {
    
    var pl = document.getElementById("user_profile_section");
    ReactDOM.render(<Userprofile profileimage={profile_image_object} profiletext={profile_text_object} />, pl);
}

export {
    render_created_profile
}