import React from 'react';

const Todo = ({ isComplete, description }) => {
  return (
    <div className="todo-container">
      <div className="todo-description">{description}</div>
      <div className="todo-status">Status: {isComplete ? 'Complete' : 'Not Complete'}</div>
    </div>
  );
};

export default Todo;
