import React, { useState } from 'react';
import {
  TODO_ITEM_NOT_COMPLETE_TEXT,
  TODO_ITEM_COMPLETE_TEXT
} from '../util/constants';

const Todo = ({
  id,
  isComplete,
  description,
  isLoading,
  onMarkAsCompleteClicked,
  onClickDeleteTodo
}) => {
  const [
    isDeleteConfirmationVisible,
    setIsDeleteConfirmationVisible
  ] = useState(false);
  return (
    <div className='todo-container'>
      <div className='todo-description'>{description}</div>
      <div>
        {isComplete ? null : (
          <button disabled={isLoading} onClick={onMarkAsCompleteClicked}>
            Mark As Complete
          </button>
        )}
        {isDeleteConfirmationVisible ? (
          <div>
            Are you sure want to delete ?{' '}
            <button 
              disabled={isLoading}
              onClick={()=>onClickDeleteTodo(id)}
              >Yes</button>
            <button
              disabled={isLoading}
              onClick={() => setIsDeleteConfirmationVisible(false)}
            >
              No
            </button>
          </div>
        ) : (
          <button
            disabled={isLoading}
            onClick={() => setIsDeleteConfirmationVisible(true)}
          >
            Delete
          </button>
        )}
      </div>
      <div
        className={`todo-status ${isComplete ? 'todo-status-complete' : ''}`}
      >
        Status:{' '}
        {isComplete ? TODO_ITEM_COMPLETE_TEXT : TODO_ITEM_NOT_COMPLETE_TEXT}
      </div>
    </div>
  );
};

export default Todo;
