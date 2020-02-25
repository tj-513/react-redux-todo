import { List, Map } from 'immutable';
import { v1 as uuid } from 'uuid';

const initialState = Map({
  todos: List([
    { id: uuid(), description: 'Create Todo', isComplete: false },
    { id: uuid(), description: 'View Todo', isComplete: true }
  ]),
  isAddTodoInputVisible: false,
  saveTodoButtonText: 'Save'
});

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MARK_AS_COMPLETE':
      const completedItemIndex = state
        .get('todos')
        .findIndex(todo => todo.id === action.value);

      return state.setIn(
        ['todos', completedItemIndex, 'isComplete'],
        !!action.value
      );

    case 'ON_CLICK_ADD_TODO_BUTTON':
      return state.set(
        'isAddTodoInputVisible',
        !state.get('isAddTodoInputVisible')
      );

    case 'ON_CLICK_SAVE_TODO_BUTTON':
      return state.set('saveTodoButtonText', 'Saving...');

    case 'ON_SAVE_TODO_SUCCESS':
      return state
        .updateIn(['todos'], todos =>
          todos.push({
            id: uuid(),
            description: action.value.value,
            isComplete: false
          })
        )
        .set('saveTodoButtonText', 'Save');
    default:
      return state;
  }
};

export default todoReducer;
