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
  isAddTodoInputVisible,
  saveTodoButtonText,
  onClickSaveButton,
  onClickAddTodoButton,
  onChangeTodoSearchInput
}) => (
  <div className='home-container'>
    <div>
      <input
        type='search'
        placeholder='Search for todos..'
        onChange={onChangeTodoSearchInput}
      />
    </div>
    {isAddTodoInputVisible ? (
      <AddTodo
        onClickSaveButton={onClickSaveButton}
        onClickCancelButton={onClickAddTodoButton}
        saveTodoButtonText={saveTodoButtonText}
      />
    ) : (
      <button onClick={onClickAddTodoButton}>Add New Todo</button>
    )}

    <h3> Your Todos</h3>
    {todos &&
      todos.map(todo => (
        <Todo
          key={todo.id}
          completed={todo.isComplete}
          description={todo.description}
        />
      ))}
  </div>
);

const mapStateToProps = state => {
  return {
    todos: getMatchingTodos(state),
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
