import React from 'react';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import Todo from './Todo';
import {onClickAddTodoButtonAction} from '../actions/index';

const Home = ({
  todos,
  isAddTodoInputVisible,
  saveTodoButtonText,
  onClickSaveButton,
  onClickAddTodoButton
}) => (
  <div className='home-container'>
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
    todos: state.get('todos'),
    isAddTodoInputVisible: state.get('isAddTodoInputVisible'),
    saveTodoButtonText: state.get('saveTodoButtonText')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAddTodoButton: () => dispatch(onClickAddTodoButtonAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
