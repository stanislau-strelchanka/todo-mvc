import React from 'react'

const Link = function(props) {

    return (
        <label>
            <input type="radio" name="filter" value={props.value} defaultChecked={props.isChecked}
                   onClick={() => props.onClick(props.value)}
            />
            {props.value}
        </label>
    );
};

export default Link;