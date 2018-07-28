import React from 'react';
import FilterEnumeration from '../util';
import FilterLinkPanel from './FilterLinkPanel';
import VisibleTodoItems from '../container/VisibleTodoItems';
import AddTodo from '../container/AddTodo';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleTodoAdd = this.handleTodoAdd.bind(this);

        this.state = {
            todos:[],
            visibilityFilter: FilterEnumeration.All,
        }
    }

    handleFilterClick(filterValue) {
        this.setState({visibilityFilter: filterValue})
    }

    handleTodoClick(id) {
        let todos = this.state.todos.splice(0);
        let todo = todos.find(i => i.id === id);
        todo.isChecked = !todo.isChecked;
        this.setState({todos: todos});
    }

    handleTodoAdd(value, id) {
        this.setState(
            { todos: this.state.todos.concat({ value:value, id:id }) }
        )
    }

    render() {
        return (
            <div>
                <AddTodo store={this.props.store} onTodoAdd={this.handleTodoAdd}/>
                <VisibleTodoItems store={this.props.store} visibilityFilter={this.state.visibilityFilter} todos={this.state.todos} onTodoClick={this.handleTodoClick}/>
                <FilterLinkPanel store={this.props.store} visibilityFilter={this.state.visibilityFilter}  onFilterLinkClick={this.handleFilterClick}/>
            </div>
        )
    }

}

export default App;