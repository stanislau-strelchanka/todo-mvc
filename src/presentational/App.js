import React from 'react';
import FilterLinkPanel from './FilterLinkPanel';
import FilterEnumeration from '../util';
import VisibleTodoItems from "../container/VisibleTodoItems";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.state = {
            todos:[ {value:'eat', isChecked:false}, {value:'basic app', isChecked:false}, {value:'name stas', isChecked:true}],
            visibilityFilter: FilterEnumeration.All,
        }
    }

    handleFilterClick(filterValue) {
        this.setState({visibilityFilter: filterValue})
    }

    handleTodoClick(index) {
        let todos = this.state.todos.splice(0);
        let todo = todos[index];
        todo.isChecked = !todo.isChecked;
        this.setState({todos: todos});
    }

    render() {
        return (
            <div>
                {/*
            add todo
            */}
            <VisibleTodoItems visibilityFilter={this.state.visibilityFilter} todos={this.state.todos} onTodoClick={this.handleTodoClick}/>
            <FilterLinkPanel onFilterLinkClick={this.handleFilterClick}/>
            </div>
        )
    }

}

export default App;