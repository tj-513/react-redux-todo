import { List, Map } from 'immutable';
import { v1 as uuid } from 'uuid';

import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CHANGE_TODO_DESCRIPTION,
  ON_SUCCESS_SAVE_TODO,
  ON_CHANGE_TODO_SEARCH_INPUT,
  ON_CLICK_MARK_TODO_AS_COMPLETE,
  ON_SUCCESS_MARK_TODO_AS_COMPLETE,
  ON_CLICK_DELETE_TODO,
  ON_SUCCESS_DELETE_TODO,
  ON_SET_IS_ADD_TODO_LOADING
} from '../util/constants';

const initialState = Map({
  todos: List([]),
  isAddTodoInputVisible: false,
  saveTodoButtonText: 'Save',
  isAddTodoLoading: false,
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

    case ON_SUCCESS_SAVE_TODO:
      return onSaveTodoSuccess(state, value);

    case ON_CHANGE_TODO_SEARCH_INPUT:
      return onChangeTodoSearchInput(state, value);

    case ON_SUCCESS_MARK_TODO_AS_COMPLETE:
      return onSuccessMarkTodoAsComplete(state, value);

    case ON_CLICK_DELETE_TODO:
      return onClickDeleteTodo(state, value);

    case ON_SUCCESS_DELETE_TODO:
      return onSuccessDeleteTodo(state, value);

    case ON_SET_IS_ADD_TODO_LOADING:
      return onSetIsAddTodoLoading(state, value);
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
    .set('todoDescription', '');
};

const onChangeTodoSearchInput = (state, value) => {
  return state.set('searchTerm', value);
};

const onClickMarkTodoAsComplete = (state, value) => {
  const completedItemIndex = state
    .get('todos')
    .findIndex(todo => todo.id === value);
  return state.setIn(['todos', completedItemIndex, 'isLoading'], true);
};

const onSuccessMarkTodoAsComplete = (state, value) => {
  const completedItemIndex = state
    .get('todos')
    .findIndex(todo => todo.id === value);
  return state
    .setIn(['todos', completedItemIndex, 'isComplete'], true)
    .setIn(['todos', completedItemIndex, 'isLoading'], false);
};

const onClickDeleteTodo = (state, value) => {
  const itemToDeleteIndex = state
    .get('todos')
    .findIndex(todo => todo.id === value);
  return state.setIn(['todos', itemToDeleteIndex, 'isLoading'], true);
};

const onSuccessDeleteTodo = (state, value) => {
  return state.updateIn(['todos'], todos =>
    todos.filter(todo => todo.id !== value)
  );
};

const onSetIsAddTodoLoading = (state, value) => {
  return state.set('isAddTodoLoading', value);
};
export default todoReducer;
