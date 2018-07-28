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

    render() {
        return (
            <div>
                <AddTodo/>
                <VisibleTodoItems />
                <FilterLinkPanel visibilityFilter={this.state.visibilityFilter}  onFilterLinkClick={this.handleFilterClick}/>
            </div>
        )
    }

}

export default App;