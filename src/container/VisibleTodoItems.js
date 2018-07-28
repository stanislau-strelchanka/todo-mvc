import React from 'react'
import TodoItems from '../presentational/TodoItems';
import FilterEnum from '../util';

const VisibleTodoItems = function (props) {
    switch (props.visibilityFilter) {
        case FilterEnum.All:
            return <TodoItems todos={props.todos} onTodoClick={props.onTodoClick}/>;
        case FilterEnum.Active:
            return <TodoItems todos={props.todos.filter(i => !i.isChecked)} onTodoClick={props.onTodoClick}/>;
        case FilterEnum.Completed:
            return <TodoItems todos={props.todos.filter(i => i.isChecked)} onTodoClick={props.onTodoClick}/> ;
        default:
            return <TodoItems todos={props.todos}/>;
    }
};

export default VisibleTodoItems;