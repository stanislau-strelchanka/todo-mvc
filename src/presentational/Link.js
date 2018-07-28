import React from 'react'

const Link = function(props) {

    return (
        <label>
            <input type="radio" name="filter" value={props.filter} defaultChecked={props.isChecked}
                   onClick={() => props.onClick(props.filter)}
            />
            {props.filter}
        </label>
    );
};

export default Link;