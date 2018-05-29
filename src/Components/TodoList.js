import React from 'react';

const TodoItem = ({ id, name, isComplete }) => (
  <li key={id}>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>
);

export default props => (
  <div className="todo-list">
    <ul>{props.todos.map(todo => <TodoItem {...todo} />)}</ul>
  </div>
);
