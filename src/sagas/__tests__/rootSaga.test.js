import { delay } from 'redux-saga/effects';
import { createNewTodo } from '../rootSaga';


describe('Test create todo saga', () => {
  const action = { value: { id: 'ab12', description: 'description' } };
  const expectedAction = {
    type: 'ON_SUCCESS_SAVE_TODO',
    value: { id: 'ab12', description: 'description' }
  };
  const generator = createNewTodo(action);
  test('Should create todo successfully', () => {
    expect(generator.next().value).toEqual(delay(1000));
    
    const actionResultOnSuccessfulSave = generator.next();
    expect(actionResultOnSuccessfulSave.value.payload.action).toEqual(expectedAction);

    const endResult = generator.next();
    expect(endResult.done).toBe(true);

  });
});
