import React from 'react';
import '../presentational/Link'
import Link from "../presentational/Link";

class FilterLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Link onClick={this.props.onFilterClick} isChecked={this.props.visibilityFilter === this.props.filter}
                  value={this.props.filter} />
        )
    }
}

export default FilterLink;