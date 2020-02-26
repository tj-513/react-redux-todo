import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CHANGE_TODO_DESCRIPTION,
  ON_SAVE_TODO_SUCCESS
} from '../util/constants';

const onClickAddTodoButtonAction = () => ({
  type: ON_CLICK_ADD_TODO_BUTTON
});

const onClickSaveTodoButtonAction = value => ({
  type: ON_CLICK_SAVE_TODO_BUTTON,
  value
});

const onChangeTodoDescriptionAction = description => ({
  type: ON_CHANGE_TODO_DESCRIPTION,
  value: description
});

const onSaveTodoSuccessAction = value => ({
  type: ON_SAVE_TODO_SUCCESS,
  value
});

export {
  onClickAddTodoButtonAction,
  onClickSaveTodoButtonAction,
  onChangeTodoDescriptionAction,
  onSaveTodoSuccessAction
};