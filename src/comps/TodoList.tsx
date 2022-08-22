import { useReducer } from "react"
import { useSelector } from "react-redux"
import { selectTodos } from "../state/store"

import ITodo from "../Iinterfaces/ITodo"
import React from "react"

const TodoItem: React.FC<ITodo> = (todo) => {
    return <div key={todo.id}>
        {todo.name}
    </div>
}

export default () => {
    let todos = useSelector(selectTodos)

    return <div>
        {todos.map(e => TodoItem(e))}
    </div>
}
