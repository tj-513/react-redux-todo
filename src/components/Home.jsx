import React from 'react';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import Todo from './Todo';
import {
  onClickAddTodoButtonAction,
  onChangeTodoSearchInput
} from '../actions/index';
import { getMatchingTodos } from '../selectors/index';

const Home = ({
  todos,
  matchingTodos,
  isAddTodoInputVisible,
  saveTodoButtonText,
  onClickSaveButton,
  onClickAddTodoButton,
  onChangeTodoSearchInput
}) => (
  <div className='home-container'>
    <div className='home-header'>
      <h2>Simple Todo</h2>
      <div className='search-todo-input'>
        <input
          type='search'
          placeholder='Search for todos..'
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
          <button onClick={onClickAddTodoButton}>Add New Todo</button>
        )}
      </div>

      <h3> Your Todos</h3>
    </div>
    <div className='todos-list-container'>
      <div>
        {todos.size === 0
          ? 'No TODOs added yet..'
          : matchingTodos.size === 0
          ? 'No TODO matching search criteria'
          : null}
      </div>
      {matchingTodos &&
        matchingTodos.map(todo => (
          <Todo
            key={todo.id}
            completed={todo.isComplete}
            description={todo.description}
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
      dispatch(onChangeTodoSearchInput(e.currentTarget.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
