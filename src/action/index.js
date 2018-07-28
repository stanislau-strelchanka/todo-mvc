let nextId = 0;

export const addTodo = function(text) {
    return {
        type: 'ADD_TODO',
        text: text,
        nextId: ++nextId,
    }
};

export const toggleTodo = function(id) {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    }
};

export const setVisibilityFilter = function(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter,
    }
};