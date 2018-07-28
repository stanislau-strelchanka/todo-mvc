import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../action';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);

        this.state = {
            newTodo: '',
        }
    }

    handleTextChange(event) {
        this.setState({
            newTodo: event.target.value,
        })
    }

    handleAddTodo() {
        this.props.dispatch(addTodo(this.state.newTodo));

        this.setState({
            newTodo: '',
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

export default connect()(AddTodo);