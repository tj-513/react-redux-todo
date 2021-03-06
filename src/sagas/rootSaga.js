import { takeLatest, takeEvery, put, delay, all } from 'redux-saga/effects';
import {
  onSuccessSaveTodoAction,
  onSuccessMarkTodoAsCompleteAction,
  onSuccessDeleteTodoAction
} from '../actions/index';
import {
  ON_CLICK_SAVE_TODO_BUTTON,
  ON_CLICK_MARK_TODO_AS_COMPLETE,
  ON_CLICK_DELETE_TODO
} from '../util/constants';

export function* markTodoAsComplete(action) {
  // TODO: forward what comes from bff rather than forwarding action
  yield delay(1000);
  yield put(onSuccessMarkTodoAsCompleteAction(action.value));
}

export function* createNewTodo(action) {
  // TODO: forward what comes from bff rather than forwarding action
  yield delay(1000);
  yield put(onSuccessSaveTodoAction(action.value));
}

export function* onClickDeleteTodo(action) {
  yield delay(1000);
  yield put(onSuccessDeleteTodoAction(action.value));
}

export default function* watchCreateNewTodo() {
  yield all([
    takeLatest(ON_CLICK_SAVE_TODO_BUTTON, createNewTodo),
    takeEvery(ON_CLICK_MARK_TODO_AS_COMPLETE, markTodoAsComplete),
    takeEvery(ON_CLICK_DELETE_TODO, onClickDeleteTodo)
  ]);
}
