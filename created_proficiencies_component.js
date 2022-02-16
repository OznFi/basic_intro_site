'use strict';

var table_values = [{ talent: 'CS', level: 'Grad' }, // index:0},
{ talent: 'CSS', level: 'Mid' }, // index:1},
{ talent: 'HTML', level: 'Mid' }, // index:2},
{ talent: 'JS', level: 'Mid' }];
function Userproficiencytable(props) {

    return React.createElement(
        'div',
        { id: 'proficiency_table_container' },
        React.createElement(Proftable, null)
    );
}
function Proftable(props) {
    var tablerows = [];
    for (var i = 0; i < table_values.length; i++) {
        tablerows.push(React.createElement(Tablerow, { row: table_values[i] }));
    }
    return React.createElement(
        'table',
        { id: 'proficiency_table' },
        React.createElement(
            'tr',
            { 'class': 'prof_tablerow' },
            React.createElement(
                'th',
                null,
                'Talent'
            ),
            React.createElement(
                'th',
                null,
                'Level'
            )
        ),
        tablerows
    );
}
function Tablerow(props) {
    var rowdata = [];
    for (var i in props.row) {
        rowdata.push(React.createElement(
            'td',
            null,
            props.row[i]
        ));
    }
    return React.createElement(
        'tr',
        { 'class': 'prof_tablerow' },
        rowdata
    );
}

function render_proftable() {
    var pl = document.getElementById('user_proficiencies_section');
    ReactDOM.render(React.createElement(Proftable, null), pl);
}
export { render_proftable };