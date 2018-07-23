import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function TodoList(props) {
    let todos = [1, 2, 3].map((item) => {
        return <TodoItem value={item} isChecked={item % 2 === 0}/>;
    });

    return (
        <div>
            <h1>To do list</h1>
            <AddTodo/>
            <ul>{todos}</ul>
            <TodoFilter/>
        </div>
    )
}

function AddTodo(props) {
    return (
        <div>
            <input type="text"/>
            <input type="button" value="Add Todo"/>
        </div>
    );
}

function TodoItem(props) {
    return (
        <li>
            <label>
                {props.value}
                <input type="checkbox" checked={props.isChecked} />
            </label>
        </li>
    );
}

function TodoFilter(props) {
    return (
        <div>
            <label>
                <input type="radio" name="filter" value="All" defaultChecked /> All
            </label>
            <label>
                <input type="radio" name="filter" value="Active"/> Active
            </label>
            <label>
                <input type="radio" name="filter" value="Completed"/> Completed
            </label>
        </div>
    );
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));
registerServiceWorker();
