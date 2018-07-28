import React from 'react'

const Link = function(props) {

    return (
        <div>
            <input type="radio" name="filter" value={props.value} defaultChecked={props.isChecked}
                   onClick={() => props.onClick(props.value)}
            />
            {props.value}
        </div>
    );
};

export default Link;