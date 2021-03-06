import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../Reducers/Todo';

const TodoItem = ({ id, name, isComplete }) => (
  <li key={id}>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>
);

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    return (
      <div className="todo-list">
        <ul>{this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>
      </div>
    );
  }
}
export default connect(
  state => ({ todos: state.todos }),
  { fetchTodos }
)(TodoList);
