import { takeLatest, put, delay } from 'redux-saga/effects';
import {onSaveTodoSuccessAction} from '../actions/index';
import {ON_CLICK_SAVE_TODO_BUTTON} from '../util/constants';

function* createNewTodo(action) {
  // TODO: forward what comes from bff rather than forwarding action
  yield delay(1000);
  yield put(onSaveTodoSuccessAction(action.value));
}

export default function* watchCreateNewTodo() {
  yield takeLatest(ON_CLICK_SAVE_TODO_BUTTON, createNewTodo);
}
