'use strict';

function Profiletextsection(props) {

    return React.createElement(
        'div',
        { id: 'profile_component' },
        React.createElement(
            'h2',
            null,
            'Describe Yourself'
        ),
        React.createElement(Welcometext, null),
        React.createElement(Maintext, null)
    );
}

function Welcometext(props) {

    return React.createElement(
        'div',
        { id: 'welcome_text_container' },
        React.createElement(
            'label',
            { 'for': 'profile_welcome_textinput' },
            'Write a Welcoming Text!'
        ),
        React.createElement('input', { type: 'text', id: 'profile_welcome_textinput' })
    );
}
//The profile picture comp is for the actual rendering and not selection
function Profilepicture(props) {

    return React.createElement('img', { src: props.src });
}
function Maintext(props) {

    return React.createElement(
        'div',
        { id: 'main_text_section' },
        React.createElement(Nametitle, null),
        React.createElement(Description, null)
    );
}
function Nametitle(props) {

    return React.createElement(
        'div',
        { id: 'name_title_section' },
        React.createElement(
            'label',
            { 'for': 'profile_nameinput' },
            'Enter Your Name'
        ),
        React.createElement('input', { id: 'profile_nameinput' }),
        React.createElement(
            'label',
            { 'for': 'profile_titleinput' },
            'Enter the Title(s) That Describe Your Expertise'
        ),
        React.createElement('input', { id: 'profile_titleinput' })
    );
}
function Description(props) {

    return React.createElement(
        'div',
        { id: 'profile_longtext_container' },
        React.createElement(
            'label',
            { 'for': 'profile_textinput' },
            'Write a Text That Conveys Meaningful Information About You'
        ),
        React.createElement('textarea', { id: 'profile_textinput' })
    );
}
function inputrend() {
    var place = document.getElementById('profile_text');
    ReactDOM.render(React.createElement(Profiletextsection, null), place);
}

export { Profiletextsection, Welcometext, Profilepicture, Maintext, Nametitle, Description, inputrend };