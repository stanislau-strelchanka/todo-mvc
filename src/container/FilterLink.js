import { connect } from 'react-redux'
import {setVisibilityFilter} from '../action';
import '../presentational/Link'
import Link from "../presentational/Link";

const mapStateToProps = function (state, ownProps) {
    return {
        isChecked: state.visibilityFilter === ownProps.filter,
    }
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)