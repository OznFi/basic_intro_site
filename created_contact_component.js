'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contact_info = {
    twitter_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    facebook_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    instagram_input: 'ybuuuuuuuuuuuuuuuuuasdddupppppppu',
    linkedin_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp',
    github_input: 'ybuuuuuuuuuuuuuuuuuasdddupppp'
};
var essential_contact = {
    phone: '999999', mail: 'jikolkiju'
};
var contact_images = {
    twitter_input: 'images/twitter_logo.png', facebook_input: 'images/facebook_logo.png',
    instagram_input: 'images/instagram_logo.png', linkedin_input: 'images/linkedin_logo.png',
    github_input: 'images/github_logo.png' };

function Usercontact(props) {

    return React.createElement('div', null);
}

function Contactinputsection(props) {
    var contactinputs = [];
    for (var i in contact_info) {
        if (contact_info[i] == '' || contact_info[i] == null || contact_info[i] == undefined) {
            //alert(i);
        } else {
            contactinputs.push(React.createElement(Contactinput, { image: contact_images[i], identity: i, inputvalue: contact_info[i] }));
        }
    }
    // alert(contactinputs[1]);
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Contact Me!'
        ),
        React.createElement(
            'div',
            { id: 'contact_input_main_container' },
            contactinputs
        ),
        React.createElement(Essentialcontactrow, { mail: essential_contact.mail, phone: essential_contact.phone })
    );
}

var Contactinput = function (_React$Component) {
    _inherits(Contactinput, _React$Component);

    function Contactinput(props) {
        _classCallCheck(this, Contactinput);

        var _this = _possibleConstructorReturn(this, (Contactinput.__proto__ || Object.getPrototypeOf(Contactinput)).call(this, props));

        _this.state = {
            icon: props.image,
            coninput: props.inputvalue,
            identif: props.identity
        };
        return _this;
    }

    _createClass(Contactinput, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'contact_input' },
                React.createElement('img', { 'class': 'contact_input_image', src: this.state.icon }),
                React.createElement('input', { type: 'text', 'class': 'contact_inputfield', value: this.state.coninput, disabled: true })
            );
        }
    }]);

    return Contactinput;
}(React.Component);

function Essentialcontactrow(props) {
    if (essential_contact.phone == null || essential_contact.phone == '' || essential_contact.phone == undefined) {
        return React.createElement(
            'div',
            { 'class': 'essential_input_container' },
            React.createElement(
                'div',
                { 'class': 'essential_input' },
                React.createElement('i', { 'class': 'fa fa-envelope' }),
                React.createElement('input', { id: 'user_mail', disabled: true, value: props.mail })
            )
        );
    } else {
        return React.createElement(
            'div',
            { 'class': 'essential_input_container' },
            React.createElement(
                'div',
                { 'class': 'essential_input' },
                React.createElement('i', { 'class': 'fa fa-phone' }),
                React.createElement('input', { id: 'user_phone', disabled: true, value: props.phone })
            ),
            React.createElement(
                'div',
                { 'class': 'essential_input' },
                React.createElement('i', { 'class': 'fa fa-envelope' }),
                React.createElement('input', { id: 'user_mail', disabled: true, value: props.mail })
            )
        );
    }
}
function input_size_adjust() {
    //hard coded for 20px font
    var non_essential_inputs = document.querySelectorAll('.contact_inputfield');
    for (var i = 0; i < non_essential_inputs.length; i++) {
        var fontsize = window.getComputedStyle(non_essential_inputs[i], null).fontSize.split('px')[0];
        non_essential_inputs[i].style.width = 12 * non_essential_inputs[i].value.length + "px";
    }
}
function render_contact_input() {
    var place = document.getElementById("user_contact_section");
    ReactDOM.render(React.createElement(Contactinputsection, null), place);
    setTimeout(function () {
        input_size_adjust();
    }, 50);
}
export { render_contact_input };