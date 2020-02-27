import { List, Map } from 'immutable';
import { v1 as uuid } from 'uuid';

import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CHANGE_TODO_DESCRIPTION,
  ON_SAVE_TODO_SUCCESS,
  ON_CHANGE_TODO_SEARCH_INPUT,
  ON_CLICK_MARK_TODO_AS_COMPLETE,
  ON_SAVE_MARK_TODO_AS_COMPLETE_SUCCESS,
} from '../util/constants';

const initialState = Map({
  todos: List([]),
  isAddTodoInputVisible: false,
  saveTodoButtonText: 'Save',
  todoDescription: '',
  todoDescriptionWarningText: null,
  searchTerm: ''
});

const todoReducer = (state = initialState, action) => {
  const { value } = action;
  switch (action.type) {
    case ON_CLICK_MARK_TODO_AS_COMPLETE:
      return onClickMarkTodoAsComplete(state, value);

    case ON_CLICK_ADD_TODO_BUTTON:
      return onClickAddTodoButton(state);

    case ON_CLICK_SAVE_TODO_BUTTON:
      return onClickSaveTodoButton(state);

    case ON_CHANGE_TODO_DESCRIPTION:
      return onChangeTodoDescription(state, value);

    case ON_SAVE_TODO_SUCCESS:
      return onSaveTodoSuccess(state, value);

    case ON_CHANGE_TODO_SEARCH_INPUT:
      return onChangeTodoSearchInput(state, value);

    case ON_SAVE_MARK_TODO_AS_COMPLETE_SUCCESS:
      return onSaveMarkTodoAsCompleteSuccess(state, value);

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
        isComplete: false,
        isLoading: false
      })
    )
    .set('saveTodoButtonText', 'Save')
    .set('todoDescription', '');
};

const onChangeTodoSearchInput = (state, value) => {
  return state.set('searchTerm', value);
};

const onClickMarkTodoAsComplete = (state, value) => {
  const completedItemIndex = state
    .get('todos')
    .findIndex(todo => todo.id === value);
  console.log(completedItemIndex);
  return state
    .setIn(['todos', completedItemIndex, 'isLoading'], true);
};

const onSaveMarkTodoAsCompleteSuccess = (state, value) => {
  const completedItemIndex = state
    .get('todos')
    .findIndex(todo => todo.id === value);
    return state
    .setIn(['todos', completedItemIndex, 'isComplete'], true)
    .setIn(['todos', completedItemIndex, 'isLoading'], false);
};

export default todoReducer;
