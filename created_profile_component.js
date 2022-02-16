'use strict';

var profile_image_object = {
    image_source: 'images/plague_doc.jfif',
    image_translate_x: -500,
    image_translate_y: -500
};
var profile_text_object = {
    profile_welcome_textinput: "Welcome To My Page",
    profile_nameinput: 'Eric Summer',
    profile_titles: 'Titles',
    profile_textinput: 'Yoyo'
}; //here goes the fetched profile info

function Userprofile(props) {

    return React.createElement(
        'div',
        { id: 'user_profile_sectioncomp' },
        React.createElement(
            'h1',
            { id: 'user_welcome_text' },
            props.profiletext.profile_welcome_textinput
        ),
        React.createElement(
            'div',
            { id: 'user_info_container' },
            React.createElement(Userprofilepicture, { profileimage: props.profileimage }),
            React.createElement(Userprofiletext, { profiletexts: props.profiletext })
        )
    );
}
function Userprofilepicture(props) {
    var transformstyle = {
        transform: 'translate(' + props.profileimage.image_translate_x + 'px, ' + props.profileimage.image_translate_y + 'px)'
    };
    return React.createElement(
        'div',
        { id: 'user_profile_picture' },
        React.createElement(
            'div',
            { id: 'user_profile_image_container' },
            React.createElement(
                'div',
                { id: 'profile_image_movement', style: transformstyle },
                React.createElement('img', { src: props.profileimage.image_source })
            )
        )
    );
}
function Userprofiletext(props) {

    return React.createElement(
        'div',
        { id: 'user_profile_description' },
        React.createElement(
            'h2',
            null,
            props.profiletexts.profile_nameinput
        ),
        React.createElement(Usertitles, { titles: props.profiletexts.profile_titleinput }),
        React.createElement(
            'div',
            { id: 'user_profile_longtext' },
            React.createElement(
                'p',
                null,
                props.profiletexts.profile_textinput
            )
        )
    );
}
function Usertitles(props) {
    //this is gonna need a lot more code
    return React.createElement(
        'div',
        null,
        props.titles
    );
}

function render_created_profile() {

    var pl = document.getElementById("user_profile_section");
    ReactDOM.render(React.createElement(Userprofile, { profileimage: profile_image_object, profiletext: profile_text_object }), pl);
}

export { render_created_profile };