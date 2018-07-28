import FilterEnumeration from '../util';

export const visibilityFilter = function (state = FilterEnumeration.All, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};