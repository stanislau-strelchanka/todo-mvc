import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const FilterEnum = ['All', 'Active', 'Completed']

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoClicked = this.handleTodoClicked.bind(this);

        this.state = {
            todos:[],
            filter: FilterEnum[0],
        }
    }

    handleAddTodo(todoText) {
        let todos = this.state.todos.splice(0);
        todos.push({value: todoText});
        this.setState({
            todos: todos
        });
    }

    handleTodoClicked(index, isChecked) {
        let todos = this.state.todos.splice(0)
        todos[index].isChecked = isChecked;
        this.setState({
            todos:todos,
        })
    }

    render() {
        let todos = this.state.todos.map((item, index) => {
            return <TodoItem value={item.value} isChecked={item.isChecked} key={index} index={index}
                             onTodoClicked={this.handleTodoClicked}/>;
        });

        return (
            <div>
                <h1>To do list</h1>
                <AddTodo onTodoAdd={this.handleAddTodo}/>
                <ul>{todos}</ul>
                <TodoFilter/>
            </div>
        )
    }
}

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
        this.props.onTodoAdd(this.state.newTodo);
        this.setState({newTodo: ''});
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

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onTodoClicked(this.props.index, event.target.checked);
    }

    render() {
        return (
            <li>
                <label>
                    {this.props.value}
                    <input type="checkbox" checked={this.props.isChecked} onClick={this.handleClick}/>
                </label>
            </li>
        );
    }

}

function TodoFilter(props) {
    return (
        <div>
            <label>
                <input type="radio" name="filter" value={FilterEnum[0]} defaultChecked /> All
            </label>
            <label>
                <input type="radio" name="filter" value={FilterEnum[1]}/> Active
            </label>
            <label>
                <input type="radio" name="filter" value={FilterEnum[2]}/> Completed
            </label>
        </div>
    );
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));
registerServiceWorker();
