import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './presentational/App';
import FilterEnumeration from './util';

const FilterEnum = ['All', 'Active', 'Completed']
class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoClicked = this.handleTodoClicked.bind(this);
        this.handleFilterClicked = this.handleFilterClicked.bind(this);

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
        let todos = this.state.todos.splice(0);
        todos[index].isChecked = isChecked;
        this.setState({
            todos: todos,
        })
    }

    handleFilterClicked(filter) {
        this.setState({
            filter: filter,
        })
    }

    render() {
        let todos = this.state.todos.map((item, index) => {
            let shouldReturnItem = true;
            if (this.state.filter === 'Active') {
                shouldReturnItem = !item.isChecked;
            } else if (this.state.filter === 'Completed'){
                shouldReturnItem = item.isChecked;
            }

            return shouldReturnItem ? <TodoItem value={item.value} isChecked={item.isChecked} key={index} index={index}
                             onTodoClicked={this.handleTodoClicked} /> : null;
        });

        return (
            <div>
                <h1>To do list</h1>
                <AddTodo onTodoAdd={this.handleAddTodo}/>
                <ul>{todos}</ul>
                <TodoFilter onFilterClicked={this.handleFilterClicked} selectedFilter={this.state.filter} />
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

class TodoFilter extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.createRadio = this.createRadio.bind(this);
    }

    handleFilterClick(i) {
        this.props.onFilterClicked(FilterEnum[i]);
    }

    createRadio(i) {
        let filter = FilterEnum[i];
        let isChecked = filter === this.props.selectedFilter;
        return (
            <label>
                <input key={i} type="radio" name="filter" value={filter} defaultChecked={isChecked}
                       onClick={() => this.handleFilterClick(i)}/> {filter}
            </label>
        );
    }

    render() {
        const radios = [];
        for (let i = 0; i < FilterEnum.length; i++) {
            radios.push(this.createRadio(i))
        }

        return (
            <div>
                {radios}
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
