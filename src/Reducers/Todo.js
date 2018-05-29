import { getTodos, createTodo } from '../lib/TodoServices';

const initState = {
  todos: [],
  currentTodo: ''
};

// using a const because strings are harder to debug typos
const TODO_ADD = 'TODO_ADD';
const TODOS_LOAD = 'TODOS_LOAD';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = val => ({
  type: CURRENT_UPDATE,
  payload: val
});

export const fetchTodos = () => dispatch => {
  getTodos().then(todos => dispatch(loadTodos(todos)));
};

export const addTodo = todo => ({ type: TODO_ADD, paload: todo });
export const saveTodo = name => dispatch => {
  createTodo(name).then(res => dispatch(addTodo(res)));
};

export const loadTodos = todos => ({ type: TODOS_LOAD, payload: todos });
export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case CURRENT_UPDATE:
      return { ...state, currentTodo: action.payload };
    case TODOS_LOAD:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
