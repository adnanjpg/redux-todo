import React, { StrictMode } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './state/store'
import TodoList from './comps/TodoList';
import AddTodo from './comps/AddTodo';

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </Provider>
    </StrictMode>
  );
}

export default App;
