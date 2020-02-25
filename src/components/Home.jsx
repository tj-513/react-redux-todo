import React from 'react';
import Todo from './Todo';

const Home = ({ todos }) => (
  <div className='home-container'>
    <h3> Your Todos</h3>
    {todos &&
      todos.map(todo => (
        <Todo completed={todo.isComplete} description={todo.description} />
      ))}
  </div>
);
export default Home;
