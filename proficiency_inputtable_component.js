'use strict';
//these 2 variables would change when server and db is included

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var inputs = [{ talent: 'eyy', level: 'yo', index: 0 }];
var inputnum = inputs.length;
function Inputproftable(props) {

    return React.createElement(
        'div',
        { id: 'proficiency_addition' },
        React.createElement(
            'h2',
            null,
            'Add Your Proficiencies'
        ),
        React.createElement(Inputtable, null)
    );
}
/*
function Inputrow(props) {
     
    return <div class='inputrow'>
        <input></input>
        <input></input>
    </div>;
}
*/

var Inputrow = function (_React$Component) {
    _inherits(Inputrow, _React$Component);

    function Inputrow(props) {
        _classCallCheck(this, Inputrow);

        var _this = _possibleConstructorReturn(this, (Inputrow.__proto__ || Object.getPrototypeOf(Inputrow)).call(this, props));

        _this.state = {
            talent: props.pair.talent, level: props.pair.level, index: props.pair.index
        };
        _this.handletalent = _this.handletalent.bind(_this);
        _this.handlelevel = _this.handlelevel.bind(_this);
        return _this;
    }

    _createClass(Inputrow, [{
        key: 'handletalent',
        value: function handletalent(e) {
            inputs[this.state.index].talent = e.target.value;
            this.setState({ talent: e.target.value });
        }
    }, {
        key: 'handlelevel',
        value: function handlelevel(e) {
            inputs[this.state.index].talent = e.target.value;
            this.setState({ level: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { 'class': 'talent_input_row' },
                React.createElement('input', { 'class': 'talent_input', onInput: this.handletalent, value: this.state.talent }),
                React.createElement('input', { 'class': 'level_input', onInput: this.handlelevel, value: this.state.level })
            );
        }
    }]);

    return Inputrow;
}(React.Component);

function Inputtable(props) {
    var profs = [];
    for (var i = 0; i < inputs.length; i++) {
        profs.push(React.createElement(Inputrow, { pair: inputs[i] }));
    }
    return React.createElement(
        'div',
        { id: 'proficiency_insert_table' },
        React.createElement(
            'div',
            { id: 'table__insert_descriptors' },
            React.createElement(
                'span',
                null,
                'Talent'
            ),
            React.createElement(
                'span',
                null,
                'Level'
            )
        ),
        profs,
        React.createElement(Addnewrow, null)
    );
}
function Addnewrow(props) {

    return React.createElement(
        'div',
        { 'class': 'add_row_div' },
        React.createElement(
            'button',
            { 'class': 'add_row_button', type: 'button', onClick: add_rows },
            '+'
        ),
        React.createElement(
            'span',
            { 'class': 'add_row_text' },
            'Add new proficiency'
        )
    );
}
function add_rows() {
    if (inputs.length < 25) {
        var empobj = { talent: 'Your talent here', level: 'Level of talent here', index: inputs.length };
        inputs.push(empobj);
        render_input_table();
    } else {
        alert('You have exceeded the maximum number of proficiencies');
    }
}
function render_input_table() {
    var el = document.getElementById('table_section');
    ReactDOM.render(React.createElement(Inputproftable, null), el);
}
export { Inputproftable, Inputrow, Inputtable, render_input_table, add_rows, Addnewrow };