import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import ITodo from "../Iinterfaces/ITodo"

interface ITodoSliceState {
    todos: ITodo[]
}

const initState: ITodoSliceState = {
    todos: []
}

const slc = createSlice({
    name: 'todo',
    initialState: initState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            let newTodo: ITodo = {
                id: '1',
                iscompleted: false,
                name: action.payload,
            }

            state.todos = [
                ...state.todos,
                newTodo
            ]
        },
    }
})

export default slc

export const { add } = slc.actions
