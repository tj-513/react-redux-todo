import React from 'react';
import { connect } from 'react-redux';

import {
  ADD_TODO_SAVING_BUTTON_TEXT,
  ADD_TODO_CANCEL_BUTTON_TEXT
} from '../util/constants';

import {
  onChangeTodoDescriptionAction,
  onClickSaveTodoButtonAction
} from '../actions/index';

const onKeyDownTodoDescriptionInput = (
  e,
  onClickSaveButton,
  todoDescription
) => {
  if (e.keyCode === 13) {
    onClickSaveButton({ value: todoDescription });
  }
};

const AddTodo = ({
  saveTodoButtonText,
  todoDescriptionWarningText,
  todoDescription,
  onChangeTodoDescription,
  onClickSaveButton,
  onClickCancelButton
}) => {
  return (
    <div className=''>
      <div className='add-todo-input'>
        <input
          type='text'
          placeholder='todo description'
          value={todoDescription}
          onChange={e => onChangeTodoDescription(e.currentTarget.value)}
          onKeyDown={e =>
            onKeyDownTodoDescriptionInput(e, onClickSaveButton, todoDescription)
          }
          disabled={saveTodoButtonText === ADD_TODO_SAVING_BUTTON_TEXT}
        />
      </div>

      <div>{todoDescriptionWarningText}</div>
      <div>
        <button
          disabled={
            todoDescription.length === 0 ||
            saveTodoButtonText === ADD_TODO_SAVING_BUTTON_TEXT
          }
          onClick={() => {
            onClickSaveButton({ value: todoDescription });
          }}
        >
          {saveTodoButtonText}
        </button>
        <button onClick={onClickCancelButton}>
          {ADD_TODO_CANCEL_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saveTodoButtonText: state.get('saveTodoButtonText'),
    todoDescriptionWarningText: state.get('todoDescriptionWarningText'),
    todoDescription: state.get('todoDescription')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeTodoDescription: description =>
      dispatch(onChangeTodoDescriptionAction(description)),
    onClickSaveButton: e => {
      const { value } = e;
      dispatch(onClickSaveTodoButtonAction(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
