import React, { StrictMode } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './state/store'
import TodoList from './TodoList';

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    </StrictMode>
  );
}

export default App;
