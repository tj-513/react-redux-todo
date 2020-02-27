import {
  onClickAddTodoButtonAction,
  onClickSaveTodoButtonAction
} from '../index';

import {
  ON_CLICK_ADD_TODO_BUTTON,
  ON_CLICK_SAVE_TODO_BUTTON
} from '../../util/constants';

describe('Unit test actions', () => {
test('Should create add todo button action successfully', () => {
    const expectedAction = { type: ON_CLICK_ADD_TODO_BUTTON };
    expect(onClickAddTodoButtonAction()).toEqual(expectedAction);
  });

test('Should create on click save todo button action successfully', () => {
    const expectedAction = {
      type: ON_CLICK_SAVE_TODO_BUTTON,
      value: { id: '12312' }
    };
    expect(onClickSaveTodoButtonAction(expectedAction.value)).toEqual(
      expectedAction
    );
  });
});
