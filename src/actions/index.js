import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CHANGE_TODO_DESCRIPTION,
  ON_SAVE_TODO_SUCCESS,
  ON_CHANGE_TODO_SEARCH_INPUT,
  ON_CLICK_MARK_TODO_AS_COMPLETE,
  ON_SAVE_MARK_TODO_AS_COMPLETE_SUCCESS,
  ON_CLICK_DELETE_TODO,
  ON_SUCCESS_DELETE_TODO
} from '../util/constants';

export const onClickAddTodoButtonAction = () => ({
  type: ON_CLICK_ADD_TODO_BUTTON
});

export const onClickSaveTodoButtonAction = value => ({
  type: ON_CLICK_SAVE_TODO_BUTTON,
  value
});

export const onChangeTodoDescriptionAction = description => ({
  type: ON_CHANGE_TODO_DESCRIPTION,
  value: description
});

export const onSaveTodoSuccessAction = value => ({
  type: ON_SAVE_TODO_SUCCESS,
  value
});

export const onChangeTodoSearchInput = value => ({
  type: ON_CHANGE_TODO_SEARCH_INPUT,
  value
});

export const onClickMarkTodoAsComplete = id => ({
  type: ON_CLICK_MARK_TODO_AS_COMPLETE,
  value: id
});

export const onSaveMarkTodoAsCompleteSuccessAction = id => ({
  type: ON_SAVE_MARK_TODO_AS_COMPLETE_SUCCESS,
  value: id
});

export const onClickDeleteTodo = id => ({
  type: ON_CLICK_DELETE_TODO,
  value: id
});

export const onSuccessDeleteTodo = id => ({
  type: ON_SUCCESS_DELETE_TODO,
  value: id
})