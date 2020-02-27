import React from 'react';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import Todo from './Todo';
import {
  onClickAddTodoButtonAction,
  onChangeTodoSearchInput,
  onClickMarkTodoAsComplete,
  onClickDeleteTodo
} from '../actions/index';
import { getMatchingTodos } from '../selectors/index';
import {
  APP_TITLE,
  TODO_LIST_NO_TODOS_ADDED_TEXT,
  TODO_LIST_NO_TODOS_MATCHING_TEXT,
  TODO_LIST_TITLE_TEXT,
  TODO_SEARCH_PLACEHOLDER_TEXT,
  ADD_TODO_NEW_TODO_BUTTON_TEXT
} from '../util/constants';

const Home = ({
  todos,
  matchingTodos,
  isAddTodoInputVisible,
  saveTodoButtonText,
  onClickSaveButton,
  onClickAddTodoButton,
  onChangeTodoSearchInput,
  onClickMarkTodoAsComplete,
  onClickDeleteTodo
}) => (
  <div className='home-container'>
    <div className='home-header'>
      <h2>{APP_TITLE}</h2>
      <div className='search-todo-input'>
        <input
          type='search'
          placeholder={TODO_SEARCH_PLACEHOLDER_TEXT}
          onChange={onChangeTodoSearchInput}
        />
      </div>
      <div className='add-todo-container'>
        {isAddTodoInputVisible ? (
          <AddTodo
            onClickSaveButton={onClickSaveButton}
            onClickCancelButton={onClickAddTodoButton}
            saveTodoButtonText={saveTodoButtonText}
          />
        ) : (
          <button onClick={onClickAddTodoButton}>
            {ADD_TODO_NEW_TODO_BUTTON_TEXT}
          </button>
        )}
      </div>

      <h3>{TODO_LIST_TITLE_TEXT}</h3>
    </div>
    <div className='todos-list-container'>
      <div>
        {todos.size === 0
          ? TODO_LIST_NO_TODOS_ADDED_TEXT
          : matchingTodos.size === 0
          ? TODO_LIST_NO_TODOS_MATCHING_TEXT
          : null}
      </div>
      {matchingTodos &&
        matchingTodos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            isComplete={todo.isComplete}
            isLoading={todo.isLoading}
            description={todo.description}
            onMarkAsCompleteClicked={() => onClickMarkTodoAsComplete(todo.id)}
            onClickDeleteTodo={() => onClickDeleteTodo(todo.id)}
          />
        ))}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.get('todos'),
    matchingTodos: getMatchingTodos(state),
    isAddTodoInputVisible: state.get('isAddTodoInputVisible'),
    saveTodoButtonText: state.get('saveTodoButtonText')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAddTodoButton: () => dispatch(onClickAddTodoButtonAction()),
    onChangeTodoSearchInput: e =>
      dispatch(onChangeTodoSearchInput(e.currentTarget.value)),
    onClickMarkTodoAsComplete: id => dispatch(onClickMarkTodoAsComplete(id)),
    onClickDeleteTodo: id => dispatch(onClickDeleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
