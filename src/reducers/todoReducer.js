import { List, Map } from 'immutable';

const initialState = Map({
  todos: List([
    { id: 1, description: 'Create Todo', isComplete: false },
    { id: 2, description: 'View Todo', isComplete: true }
  ]),
  isAddTodoInputVisible: false
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.set('todos', state.get('todos').push(action.value));

    case 'MARK_AS_COMPLETE':
      const completedItemIndex = state
        .get('todos')
        .findIndex(todo => todo.id === action.value);

      return state.setIn(
        ['todos', completedItemIndex, 'isComplete'],
        !!action.value
      );
    
    case 'ON_CLICK_ADD_TODO_BUTTON':
        return state.set('isAddTodoInputVisible', !state.get('isAddTodoInputVisible'));

    default:
      return state;
  }
};

export default todoReducer;