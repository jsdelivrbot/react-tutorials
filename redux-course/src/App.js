import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React(Redux) - To Do App</h1>
        </header>
        <div className="Todo-App">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App

