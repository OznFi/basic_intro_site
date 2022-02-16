'use strict';

var contact_inputs = {
    twitter_input: '', facebook_input: '', instagram_input: '', linkedin_input: '',
    github_input: '', phone: '', mail: ''
};

function Contactinputsection(props) {

    return <div>
        <h2>Enter Your Contact Info</h2>
        <div id="contact_input_main_container">
            <Contactinput image="images/twitter_logo.png" identity="twitter_input" />
            <Contactinput image="images/facebook_logo.png" identity="facebook_input" />
            <Contactinput image="images/instagram_logo.png" identity="instagram_input" />
            <Contactinput image="images/linkedin_logo.png" identity="linkedin_input" />
            <Contactinput image="images/github_logo.png" identity="github_input" />
        </div>
        <Essentialcontactrow />
    </div>;
}

class Contactinput extends React.Component {
    constructor(props) {
        super(props);
        this.handleinput = this.handleinput.bind(this);
        this.state = {
            icon: props.image,
            coninput: '',
            identif:props.identity
        };
    }
    handleinput(e) {
        contact_inputs[this.state.identif] = e.target.value;
        //alert(contact_inputs[this.state.identif] + " " + contact_inputs.github_input);
        this.setState({ coninput: e.target.value });
    }
    render() {
        return (
            <div class="contact_input">
                <img class="contact_input_image" src={this.state.icon} />
                <input type="text" class="contact_inputfield" onInput={this.handleinput} />
            </div>
            );
    }
}
class Essentialcontactrow extends React.Component {
    constructor(props) {
        super(props);
        this.handleinput = this.handleinput.bind(this);
        this.state = {
            mailinput: '',
            phoneinput:''
        };
    }
    handleinput(e) {
        //var el = e.target;
        //var targetval = el.value;
        if (e.target.classList.contains("phone_contact_input")) {
            //alert(contact_inputs.phone);
            contact_inputs.phone = e.target.value;
            this.setState({ phoneinput: e.target.value });
            
        }
        else {
            contact_inputs.mail = e.target.value;
            this.setState({ mailinput: e.target.value });
        }
        
    
    }
    render() {
        return (
            <div class="essential_contact_row">
                <div class="essential_input">
                    <label for="mailinput">Enter Your Mail Adress (This Field is Mandatory!)</label>
                    <input type="text" name="mailinput" class="mail_contact_input" onInput={this.handleinput} />
                </div>
                <div class="essential_input">
                    <label for="phoneinput">Enter Your Phone Number</label>
                    <input type="text" name="phoneinput" class="phone_contact_input" onInput={this.handleinput} />
                </div>
            </div>
        );
    }
}
function render_contact_input() {
    var place = document.getElementById("contact_section");
    ReactDOM.render(<Contactinputsection />, place);
}
export {
    render_contact_input, contact_inputs
};