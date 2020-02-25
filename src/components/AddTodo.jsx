import React, { useState } from 'react';

const AddTodo = ({
  saveTodoButtonText,
  onClickSaveButton,
  onClickCancelButton
}) => {
  const [todoDescription, setTodoDescription] = useState('');
  return (
    <div>
      <input
        type='text'
        placeholder='todo description'
        value={todoDescription}
        onChange={e => setTodoDescription(e.currentTarget.value)}
      />
      <button
        disabled={saveTodoButtonText === 'Saving...'}
        onClick={() => {
          onClickSaveButton({ value: todoDescription });
        }}
      >
        {saveTodoButtonText}
      </button>
      <button onClick={onClickCancelButton}>Cancel</button>
    </div>
  );
};



export default AddTodo;
