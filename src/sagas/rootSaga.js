import { takeLatest, put, delay, all } from 'redux-saga/effects';
import {onSaveTodoSuccessAction} from '../actions/index';
import {ON_CLICK_SAVE_TODO_BUTTON} from '../util/constants';

export function* createNewTodo(action) {
  // TODO: forward what comes from bff rather than forwarding action
  yield delay(1000);
  yield put(onSaveTodoSuccessAction(action.value));
}

export default function* watchCreateNewTodo() {
  yield all([takeLatest(ON_CLICK_SAVE_TODO_BUTTON, createNewTodo)]);
}
