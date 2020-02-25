import React from 'react';

const Todo = ({ isComplete, description }) => {
  return (
    <div>
      <div>{description}</div>
      <div>Status: {isComplete ? 'Complete' : 'Not Complete'}</div>
    </div>
  );
};

export default Todo;
