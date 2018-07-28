import React from 'react'
import TodoItem from './TodoItem';

const TodoItems = function (props) {
    const todoUIElements = [];
    for (let i = 0; i < props.todos.length; i++) {
        let todo = props.todos[i];
        todoUIElements.push(<TodoItem isChecked={todo.isChecked} value={todo.value} key={todo.id} id={todo.id}
                             onClick={props.onTodoClick}/>)
    }
    return (
        <ul>
            {todoUIElements}
        </ul>
    );
};

export default TodoItems;
