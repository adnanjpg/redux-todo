import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { randomUUID } from "crypto"
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
    }
})

export default slc

export const { addTodo } = slc.actions
