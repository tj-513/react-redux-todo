import React, { useState } from 'react';
import {
  TODO_ITEM_NOT_COMPLETE_TEXT,
  TODO_ITEM_COMPLETE_TEXT,
  TODO_ITEM_DELETE_PROMPT_TEXT,
  TODO_ITEM_YES_BUTTON_TEXT,
  TODO_ITEM_NO_BUTTON_TEXT,
  TODO_ITEM_DELETE_BUTTON_TEXT
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
            {TODO_ITEM_DELETE_PROMPT_TEXT}
            <button disabled={isLoading} onClick={() => onClickDeleteTodo(id)}>
              {TODO_ITEM_YES_BUTTON_TEXT}
            </button>
            <button
              disabled={isLoading}
              onClick={() => setIsDeleteConfirmationVisible(false)}
            >
              {TODO_ITEM_NO_BUTTON_TEXT}
            </button>
          </div>
        ) : (
          <button
            disabled={isLoading}
            onClick={() => setIsDeleteConfirmationVisible(true)}
          >
            {TODO_ITEM_DELETE_BUTTON_TEXT}
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
