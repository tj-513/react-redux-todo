import { createSelector } from 'reselect';

const getAvailableTodos = state => state.get('todos');
const getSearchTerm = state => state.get('searchTerm');

const getMatchingTodos = createSelector(
  [getAvailableTodos, getSearchTerm],
  (availableTodos, searchTerm) =>
    availableTodos.filter(todo => todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
);

export { getMatchingTodos };
