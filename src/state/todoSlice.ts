import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import ITodo from "../Iinterfaces/ITodo"

import { v4 as uuidv4 } from 'uuid'

interface ITodoSliceState {
    todos: ITodo[]
}

const initialState: ITodoSliceState = {
    todos: []
}

const slc = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {

            let newTodo: ITodo = {
                id: uuidv4(),
                iscompleted: false,
                name: action.payload,
            }

            state.todos = [
                ...state.todos,
                newTodo
            ]
        },
        toggleTodo: (state, action: PayloadAction<{ id: string, iscompleted: boolean }>) => {
            state.todos = [
                ...state.todos.map(e => {
                    if (e.id == action.payload.id)
                        return {
                            ...e,
                            iscompleted: action.payload.iscompleted
                        }

                    return e
                })
            ]
        }
    }
})

export default slc

export const { addTodo, toggleTodo } = slc.actions
