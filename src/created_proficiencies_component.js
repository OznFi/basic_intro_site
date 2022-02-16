'use strict';
var table_values = [
    { talent: 'CS', level: 'Grad' },// index:0},
    { talent: 'CSS', level: 'Mid' },// index:1},
    { talent: 'HTML', level: 'Mid' },// index:2},
    { talent: 'JS', level: 'Mid' },// index:3},
];
function Userproficiencytable(props) {

    return <div id="proficiency_table_container">
        <Proftable/>
    </div>;
}
function Proftable(props) {
    var tablerows = [];
    for (let i = 0; i < table_values.length; i++) {
        tablerows.push(<Tablerow row={table_values[i]} />);
    }
    return <table id="proficiency_table">
        <tr class="prof_tablerow">
            <th>Talent</th>
            <th>Level</th>
        </tr>
        {tablerows}
    </table>;
}
function Tablerow(props) {
    var rowdata = [];
    for (let i in props.row) {
        rowdata.push(<td>{props.row[i]}</td>)
    }
    return <tr class="prof_tablerow">
        {rowdata}
    </tr>;
}

function render_proftable() {
    var pl = document.getElementById('user_proficiencies_section');
    ReactDOM.render(<Proftable />, pl);
}
export {
    render_proftable
}