import React from 'react';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';

import Todo from './Todo';

const Home = ({ todos, isAddTodoInputVisible, onClickAddTodoButton }) => (
  <div className='home-container'>
    {isAddTodoInputVisible ? (
      <AddTodo onClickSaveButton={null} onClickCancelButton={onClickAddTodoButton} />
    ) : (
      <button onClick={onClickAddTodoButton}>Add New Todo</button>
    )}

    <h3> Your Todos</h3>
    {todos &&
      todos.map(todo => (
        <Todo completed={todo.isComplete} description={todo.description} />
      ))}
  </div>
);

const mapStateToProps = state => {
  return {
    todos: state.get('todos'),
    isAddTodoInputVisible: state.get('isAddTodoInputVisible')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickAddTodoButton: () => dispatch({ type: 'ON_CLICK_ADD_TODO_BUTTON' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
