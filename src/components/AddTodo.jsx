import React from 'react';

const AddTodo = ({ onClickSaveButton, onClickCancelButton }) => {
  return (
    <div>
      <input type="text" placeholder="todo description"/> 
      <button onClick={()=>{console.log('Save')}}>Save</button>
      <button onClick={onClickCancelButton}>Cancel</button>
    </div>
  );
};

export default AddTodo;
