'use strict';
//these 2 variables would change when server and db is included
var talent_inputs = [
    {talent:'eyy', level:'yo', index:0}
];
var inputnum = talent_inputs.length;
function Inputproftable(props) {

    return <div id='proficiency_addition'>
        <h2>Add Your Proficiencies</h2>
        <Inputtable />
    </div>;
}
/*
function Inputrow(props) {
     
    return <div class='inputrow'>
        <input></input>
        <input></input>
    </div>;
}
*/
class Inputrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talent: props.pair.talent, level: props.pair.level, index: props.pair.index
        }
        this.handletalent = this.handletalent.bind(this);
        this.handlelevel = this.handlelevel.bind(this);
    }
    handletalent(e) {
        talent_inputs[this.state.index].talent = e.target.value;
        this.setState({ talent: e.target.value});
    }
    handlelevel(e) {
        talent_inputs[this.state.index].talent = e.target.value;
        this.setState({ level: e.target.value});
    }
    render() {
        return (
            <div class="talent_input_row">
                <input class='talent_input' onInput={this.handletalent} value={this.state.talent}></input>
                <input class='level_input' onInput={this.handlelevel} value={this.state.level}></input>
            </div>
            );
    }
}
function Inputtable(props) {
    var profs = [];
    for (var i = 0; i < talent_inputs.length; i++) {
        profs.push(<Inputrow pair={talent_inputs[i]} />);
    }
    return <div id="proficiency_insert_table">
        <div id='table__insert_descriptors'>
            <span>Talent</span>
            <span>Level</span>
        </div>
        {profs}
        <Addnewrow />
    </div>;
}
function Addnewrow(props) {

    return <div class='add_row_div'>
        <button class="add_row_button" type='button' onClick={add_rows}>+</button>
        <span class='add_row_text'>Add new proficiency</span>
    </div>;
}
function add_rows() {
    if (talent_inputs.length < 25) {
        var empobj = { talent: 'Your talent here', level: 'Level of talent here', index: talent_inputs.length };
        talent_inputs.push(empobj);
        render_input_table();
    }
    else {
        alert('You have exceeded the maximum number of proficiencies');
    }
}
function render_input_table() {
    var el = document.getElementById('table_section');
    ReactDOM.render(<Inputproftable />, el);
}
export {
    Inputproftable, Inputrow, Inputtable, render_input_table, add_rows, Addnewrow, talent_inputs
};