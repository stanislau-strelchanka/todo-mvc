import React from 'react';
import FilterLinkPanel from './FilterLinkPanel';
import VisibleTodoItems from '../container/VisibleTodoItems';
import AddTodo from '../container/AddTodo';

const App = function(props) {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoItems />
            <FilterLinkPanel/>
        </div>
    )

}

export default App;