import React from "react";

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

        this.state = {
            newTodo: '',
            nextId: 0,
        }
    }

    handleTextChange(event) {
        this.setState({
            newTodo: event.target.value,
        })
    }

    handleAddTodo() {
        this.props.onTodoAdd(this.state.newTodo, this.state.nextId);

        this.setState({
            newTodo: '',
            nextId: this.state.nextId + 1,
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.newTodo} onChange={this.handleTextChange}/>
                <input type="button" value="Add Todo" onClick={this.handleAddTodo}/>
            </div>
        );
    }
}

export default AddTodo;