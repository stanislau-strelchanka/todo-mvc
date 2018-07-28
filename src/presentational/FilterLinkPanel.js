import React from 'react'
import FilterLink from '../container/FilterLink'
import FilterEnumeration from '../util';

const FilterLinkPanel = function(props) {

    return (
        <div>
            <FilterLink onFilterClick={props.onFilterLinkClick} visibilityFilter={props.visibilityFilter} filter={FilterEnumeration.All}/>
            <FilterLink onFilterClick={props.onFilterLinkClick} visibilityFilter={props.visibilityFilter} filter={FilterEnumeration.Active}/>
            <FilterLink onFilterClick={props.onFilterLinkClick} visibilityFilter={props.visibilityFilter} filter={FilterEnumeration.Completed}/>
        </div>
    )
};

export default FilterLinkPanel;