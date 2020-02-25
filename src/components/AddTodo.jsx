import React from 'react';
import { connect } from 'react-redux';

const AddTodo = ({
  saveTodoButtonText,
  todoDescriptionWarningText,
  todoDescription,
  onChangeTodoDescription,
  onClickSaveButton,
  onClickCancelButton
}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='todo description'
        value={todoDescription}
        onChange={e => onChangeTodoDescription(e.currentTarget.value)}
      />
      <div>{todoDescriptionWarningText}</div>
      <div>
        <button
          disabled={
            todoDescription.length === 0 || saveTodoButtonText === 'Saving...'
          }
          onClick={() => {
            onClickSaveButton({ value: todoDescription });
          }}
        >
          {saveTodoButtonText}
        </button>
        <button onClick={onClickCancelButton}>Cancel</button>
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
      dispatch({type:'ON_CHANGE_TODO_DESCRIPTION', value:description}),
    onClickSaveButton: e => {
      const { value } = e;
      dispatch({
        type: 'ON_CLICK_SAVE_TODO_BUTTON',
        value
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
