import React from 'react'
import FilterLink from '../container/FilterLink'
import FilterEnumeration from '../util';

const FilterLinkPanel = function(props) {

    return (
        <div>
            <FilterLink filter={FilterEnumeration.All}/>
            <FilterLink filter={FilterEnumeration.Active}/>
            <FilterLink filter={FilterEnumeration.Completed}/>
        </div>
    )
};

export default FilterLinkPanel;