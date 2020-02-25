import { takeLatest, put, delay } from 'redux-saga/effects';

function* createNewTodo(action) {
  // TODO: forward what comes from bff rather than forwarding action
  yield delay(1000);
  yield put({ type: 'ON_SAVE_TODO_SUCCESS', value: action });
}

export default function* watchCreateNewTodo() {
  yield takeLatest('ON_CLICK_SAVE_TODO_BUTTON', createNewTodo);
}
