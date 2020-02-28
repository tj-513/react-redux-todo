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

export const onSuccessSaveTodoAction = value => ({
  type: ON_SUCCESS_SAVE_TODO,
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

export const onSuccessMarkTodoAsCompleteAction = id => ({
  type: ON_SUCCESS_MARK_TODO_AS_COMPLETE,
  value: id
});

export const onClickDeleteTodoAction = id => ({
  type: ON_CLICK_DELETE_TODO,
  value: id
});

export const onSuccessDeleteTodoAction = id => ({
  type: ON_SUCCESS_DELETE_TODO,
  value: id
});

export const onSetIsAddTodoLoadingAction = isLoading => ({
  type: ON_SET_IS_ADD_TODO_LOADING,
  value: isLoading
});
