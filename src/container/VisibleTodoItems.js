import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import TodoItems from '../presentational/TodoItems';
import FilterEnum from '../util';

const getVisibleTodoItems = function (todos, filter) {
    switch (filter) {
        case FilterEnum.All:
            return todos
        case FilterEnum.Active:
            return todos.filter(i => !i.isChecked);
        case FilterEnum.Completed:
            return todos.filter(i => i.isChecked);
        default:
            return todos;
    }
};

const mapStateToProps = function (state) {
    return {
        todos: getVisibleTodoItems(state.todos)
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        onTodoClick: id => { dispatch( toggleTodo(id) ) },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoItems);