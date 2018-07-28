export const todos = function (state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                value: action.text,
                id: action.nextId,
            });
        case 'TOGGLE_TODO':
            let newState = state.splice(0);
            let todo = newState.find(i => i.id === id);
            todo.isChecked = !todo.isChecked;
            return newState;
        default:
            return state;
    }
};