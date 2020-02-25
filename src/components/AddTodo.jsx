import React, { useState } from 'react';

const AddTodo = ({ onClickSaveButton, onClickCancelButton }) => {
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
        onClick={() => {
          setTodoDescription('');
          onClickSaveButton({ value: todoDescription });
        }}
      >
        Save
      </button>
      <button onClick={onClickCancelButton}>Cancel</button>
    </div>
  );
};

export default AddTodo;
