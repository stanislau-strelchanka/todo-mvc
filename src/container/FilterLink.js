import React from 'react';
import { connect } from 'react-redux'
import {setVisibilityFilter} from '../action';
import '../presentational/Link'
import Link from "../presentational/Link";

const mapStateToProps = function (state, ownProps) {
    return {
        isChecked: state.visibilityFilter === ownProps.value,
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onClick: () => dispatch(setVisibilityFilter(filter, ownProps.value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)