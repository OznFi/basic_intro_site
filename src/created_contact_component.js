'use strict';
var contact_info = {
    twitter_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    facebook_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    instagram_input: 'ybuuuuuuuuuuuuuuuuuasdddupppppppu',
    linkedin_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    github_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp'
};
var essential_contact = {
    phone: '999999', mail: 'jikolkiju'
}
var contact_images = {
    twitter_input: 'images/twitter_logo.png', facebook_input: 'images/facebook_logo.png',
    instagram_input: 'images/instagram_logo.png', linkedin_input: 'images/linkedin_logo.png',
    github_input:'images/github_logo.png'};

function Usercontact(props) {

    return <div>

    </div>;
}

function Contactinputsection(props) {
    var contactinputs = [];
    for (let i in contact_info) {
        if (contact_info[i] == '' || contact_info[i] == null || contact_info[i] == undefined) {
            //alert(i);
        }
        else {
            contactinputs.push(<Contactinput image={contact_images[i]} identity={i} inputvalue={contact_info[i]} />);
        }
    }
   // alert(contactinputs[1]);
    return <div>
        <h2>Contact Me!</h2>
        <div id="contact_input_main_container">
            {contactinputs}
        </div>
        <Essentialcontactrow mail={essential_contact.mail} phone={essential_contact.phone} />
    </div>;
}

class Contactinput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.image,
            coninput: props.inputvalue,
            identif: props.identity
        };
    }
    render() {
        return (
            <div class="contact_input">
                <img class="contact_input_image" src={this.state.icon} />
                <input type="text" class="contact_inputfield" value={this.state.coninput} disabled />
            </div>
        );
    }
}
function Essentialcontactrow(props) {
    if (essential_contact.phone == null || essential_contact.phone == '' || essential_contact.phone == undefined) {
        return <div class="essential_input_container">
            <div class='essential_input'>
                <i class="fa fa-envelope"></i>
                <input id="user_mail" disabled value={props.mail}></input>
            </div>
        </div>;
    }
    else {
        return <div class="essential_input_container">
            <div class='essential_input'>
                <i class="fa fa-phone"></i>
                <input id="user_phone" disabled value={props.phone}></input>
            </div>
            <div class='essential_input'>
                <i class="fa fa-envelope"></i>
                <input id="user_mail" disabled value={props.mail}></input>
            </div>

        </div>;
    }
}
function input_size_adjust() {
    //hard coded for 20px font
    var non_essential_inputs = document.querySelectorAll('.contact_inputfield');
    for (let i = 0; i < non_essential_inputs.length; i++) {
        var fontsize = window.getComputedStyle(non_essential_inputs[i], null).fontSize.split('px')[0];
        non_essential_inputs[i].style.width = 12 * non_essential_inputs[i].value.length+"px";
    }
}
function render_contact_input() {
    var place = document.getElementById("user_contact_section");
    ReactDOM.render(<Contactinputsection />, place);
    setTimeout(function () { input_size_adjust(); }, 50);
}
export {
    render_contact_input
};