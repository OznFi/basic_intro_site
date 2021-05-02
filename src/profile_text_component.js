'use strict'
var description_text_object = {
    profile_welcome_textinput: '',
    profile_nameinput: '',
    profile_titleinput: '',
    profile_textinput:''
};
function profile_input_handle(e) {
    var textval = e.target.value;
    description_text_object[e.target.id] = textval;
}
function Profiletextsection(props) {

    return <div id='profile_component'>
        <h2>Describe Yourself</h2>
        <Welcometext/>
        <Maintext />
    </div>;
}

function Welcometext(props) {

    return <div id='welcome_text_container'>
        <label for='profile_welcome_textinput'>Write a Welcoming Text!</label>
        <input type='text' id='profile_welcome_textinput' onInput={profile_input_handle}>
        </input>
     </div>;
}
//The profile picture comp is for the actual rendering and not selection
function Profilepicture(props) {

    return <img src={props.src}>
    </img>;
}
function Maintext(props) {

    return <div id='main_text_section'>
        <Nametitle />
        <Description/>
    </div>;
}
function Nametitle(props) {

    return <div id='name_title_section'>
        <label for='profile_nameinput'>Enter Your Name</label>
        <input id='profile_nameinput' onInput={profile_input_handle}></input>
        <label for='profile_titleinput'>Enter the Title(s) That Describe Your Expertise</label>
        <input id='profile_titleinput' onInput={profile_input_handle}></input>
    </div>;
}
function Description(props) {

    return <div id='profile_longtext_container'>
        <label for='profile_textinput'>Write a Text That Conveys Meaningful Information About You</label>
        <textarea id='profile_textinput' onInput={profile_input_handle}>
        </textarea>
    </div>;
} 
function inputrend() {
    var place = document.getElementById('profile_text');
    ReactDOM.render(<Profiletextsection/>, place)
}

export {
    Profiletextsection, Welcometext, Profilepicture, Maintext, Nametitle, Description, inputrend
};
