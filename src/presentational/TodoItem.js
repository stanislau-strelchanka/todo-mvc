import React from 'react'

const TodoItem = function (props) {
    return (
        <li>
            <label>
                {props.value}
                <input type="checkbox" checked={props.isChecked}
                       onClick={() => props.onClick(props.index)} />
            </label>
        </li>
    );
};

export default TodoItem;