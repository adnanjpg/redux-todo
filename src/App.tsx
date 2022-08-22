import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';

import store from './state/store'
import TodoList from './comps/TodoList';
import AddTodo from './comps/AddTodo';

function App() {
  return (
    <div className='text-center'>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>
  );
}

function AppWrapper() {
  return (
    <StrictMode>
      <Provider store={store}>
        <App></App>
      </Provider>
    </StrictMode >
  )
}

export default AppWrapper;
