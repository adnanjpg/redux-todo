import { configureStore } from "@reduxjs/toolkit";

import slice from './todoSlice'

const store = configureStore({
    reducer: {
        todos: slice.reducer
    }
})


type RootState = ReturnType<typeof store.getState>

const selectTodos = (state: RootState) => state.todos.todos

export { selectTodos }

export default store