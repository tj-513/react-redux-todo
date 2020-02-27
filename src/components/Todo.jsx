import React from 'react';
import {
  TODO_ITEM_NOT_COMPLETE_TEXT,
  TODO_ITEM_COMPLETE_TEXT
} from '../util/constants';

const Todo = ({ isComplete, description }) => {
  return (
    <div className='todo-container'>
      <div className='todo-description'>{description}</div>
      <div className='todo-status'>
        Status:{' '}
        {isComplete ? TODO_ITEM_COMPLETE_TEXT : TODO_ITEM_NOT_COMPLETE_TEXT}
      </div>
    </div>
  );
};

export default Todo;
