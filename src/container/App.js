import React from 'react';
import FilterLinkPanel from '../presentational/FilterLinkPanel';
import FilterEnumeration from '../util';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.state = {
            todos:[],
            visibilityFilter: FilterEnumeration.All,
        }
    }

    handleFilterClick(filterValue) {
        this.setState({visibilityFilter: filterValue})
    }

    render() {
        return (
            <div>
                {/*
            add todo
            visible list
            filter panel
            */}
            <FilterLinkPanel onFilterLinkClick={this.handleFilterClick}/>
            </div>
        )
    }

}

export default App;