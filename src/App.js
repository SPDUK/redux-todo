import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <TodoForm
            changeCurrent={this.props.changeCurrent}
            currentTodo={this.props.currentTodo}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = state => state;
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
