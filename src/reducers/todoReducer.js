import { List, Map } from 'immutable';
import { v1 as uuid } from 'uuid';

import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CHANGE_TODO_DESCRIPTION,
  ON_SAVE_TODO_SUCCESS
} from '../util/constants';

const initialState = Map({
  todos: List([
    { id: uuid(), description: 'Create Todo', isComplete: false },
    { id: uuid(), description: 'View Todo', isComplete: true }
  ]),
  isAddTodoInputVisible: false,
  saveTodoButtonText: 'Save',
  todoDescription: '',
  todoDescriptionWarningText: null
});

const todoReducer = (state = initialState, action) => {
  const { value } = action;
  switch (action.type) {
    case 'MARK_AS_COMPLETE':
      const completedItemIndex = state
        .get('todos')
        .findIndex(todo => todo.id === action.value);

      return state.setIn(
        ['todos', completedItemIndex, 'isComplete'],
        !!action.value
      );

    case ON_CLICK_ADD_TODO_BUTTON:
      return onClickAddTodoButton(state);

    case ON_CLICK_SAVE_TODO_BUTTON:
      return onClickSaveTodoButton(state);

    case ON_CHANGE_TODO_DESCRIPTION:
      return onChangeTodoDescription(state, value);

    case ON_SAVE_TODO_SUCCESS:
      return onSaveTodoSuccess(state, value);

    default:
      return state;
  }
};

const onClickAddTodoButton = state => {
  return state
    .set('isAddTodoInputVisible', !state.get('isAddTodoInputVisible'))
    .set('todoDescription', '');
};

const onClickSaveTodoButton = state => {
  return state.set('saveTodoButtonText', 'Saving...');
};

const onChangeTodoDescription = (state, value) => {
  return state.set('todoDescription', value);
};

const onSaveTodoSuccess = (state, value) => {
  return state
    .updateIn(['todos'], todos =>
      todos.push({
        id: uuid(),
        description: value,
        isComplete: false
      })
    )
    .set('saveTodoButtonText', 'Save')
    .set('todoDescription', '');
};

export default todoReducer;
