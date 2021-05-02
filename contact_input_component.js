'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contact_inputs = {
    twitter_input: '', facebook_input: '', instagram_input: '', linkedin_input: '',
    github_input: '', phone: '', mail: ''
};

function Contactinputsection(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Enter Your Contact Info'
        ),
        React.createElement(
            'div',
            { id: 'contact_input_main_container' },
            React.createElement(Contactinput, { image: 'images/twitter_logo.png', identity: 'twitter_input' }),
            React.createElement(Contactinput, { image: 'images/facebook_logo.png', identity: 'facebook_input' }),
            React.createElement(Contactinput, { image: 'images/instagram_logo.png', identity: 'instagram_input' }),
            React.createElement(Contactinput, { image: 'images/linkedin_logo.png', identity: 'linkedin_input' }),
            React.createElement(Contactinput, { image: 'images/github_logo.png', identity: 'github_input' })
        ),
        React.createElement(Essentialcontactrow, null)
    );
}
function lmao() {
    alert(contact_inputs.phone);
}

var Contactinput = function (_React$Component) {
    _inherits(Contactinput, _React$Component);

    function Contactinput(props) {
        _classCallCheck(this, Contactinput);

        var _this = _possibleConstructorReturn(this, (Contactinput.__proto__ || Object.getPrototypeOf(Contactinput)).call(this, props));

        _this.handleinput = _this.handleinput.bind(_this);
        _this.state = {
            icon: props.image,
            coninput: '',
            identif: props.identity
        };
        return _this;
    }

    _createClass(Contactinput, [{
        key: 'handleinput',
        value: function handleinput(e) {
            contact_inputs[this.state.identif] = e.target.value;
            //alert(contact_inputs[this.state.identif] + " " + contact_inputs.github_input);
            this.setState({ coninput: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'contact_input' },
                React.createElement('img', { 'class': 'contact_input_image', src: this.state.icon }),
                React.createElement('input', { type: 'text', 'class': 'contact_inputfield', onInput: this.handleinput })
            );
        }
    }]);

    return Contactinput;
}(React.Component);

var Essentialcontactrow = function (_React$Component2) {
    _inherits(Essentialcontactrow, _React$Component2);

    function Essentialcontactrow(props) {
        _classCallCheck(this, Essentialcontactrow);

        var _this2 = _possibleConstructorReturn(this, (Essentialcontactrow.__proto__ || Object.getPrototypeOf(Essentialcontactrow)).call(this, props));

        _this2.handleinput = _this2.handleinput.bind(_this2);
        _this2.state = {
            mailinput: '',
            phoneinput: ''
        };
        return _this2;
    }

    _createClass(Essentialcontactrow, [{
        key: 'handleinput',
        value: function handleinput(e) {
            //var el = e.target;
            //var targetval = el.value;
            if (e.target.classList.contains("phone_contact_input")) {
                //alert(contact_inputs.phone);
                contact_inputs.phone = e.target.value;
                this.setState({ phoneinput: e.target.value });
            } else {
                contact_inputs.mail = e.target.value;
                this.setState({ mailinput: e.target.value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'essential_contact_row' },
                React.createElement(
                    'div',
                    { 'class': 'essential_input' },
                    React.createElement(
                        'label',
                        { 'for': 'mailinput' },
                        'Enter Your Mail Adress (This Field is Mandatory!)'
                    ),
                    React.createElement('input', { type: 'text', name: 'mailinput', 'class': 'mail_contact_input', onInput: this.handleinput })
                ),
                React.createElement(
                    'div',
                    { 'class': 'essential_input' },
                    React.createElement(
                        'label',
                        { 'for': 'phoneinput' },
                        'Enter Your Phone Number'
                    ),
                    React.createElement('input', { type: 'text', name: 'phoneinput', 'class': 'phone_contact_input', onInput: this.handleinput })
                )
            );
        }
    }]);

    return Essentialcontactrow;
}(React.Component);

function render_contact_input() {
    var place = document.getElementById("contact_section");
    ReactDOM.render(React.createElement(Contactinputsection, null), place);
}
export { render_contact_input, contact_inputs };