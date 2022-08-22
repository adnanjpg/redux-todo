import React from "react"
import { useDispatch } from "react-redux"
import ITodo from "../Iinterfaces/ITodo"
import { removeTodo, toggleTodo } from "../state/todoSlice"

import { FaTimes } from "react-icons/fa"

const TodoItem: React.FC<ITodo> = (todo) => {
    const dispatch = useDispatch()

    const toggleChecked = () => {
        let isc = todo.iscompleted

        dispatch(toggleTodo({
            id: todo.id,
            iscompleted: !isc
        }))
    }

    const onDeleteClick = () => {
        dispatch(removeTodo(todo.id))
    }

    return <div key={todo.id} className={todo.iscompleted ? "line-through" : ""} onClick={toggleChecked}>
        {todo.name}
        <button onClick={onDeleteClick}>
            <FaTimes></FaTimes>
        </button>
    </div>
}

export default TodoItem