import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent } from './Reducers/Todo';
import logo from './logo.svg';
import './App.css';

import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <div className="todo-app">
          <TodoForm changeCurrent={this.props.updateCurrent} currentTodo={this.props.currentTodo} />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  { updateCurrent }
)(App);
