import React from "react"
import { useDispatch } from "react-redux"
import ITodo from "../Iinterfaces/ITodo"
import { removeTodo, toggleTodo } from "../state/todoSlice"

const TodoItem: React.FC<ITodo> = (todo) => {
    const dispatch = useDispatch()

    const toggleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()

        dispatch(toggleTodo({
            id: todo.id,
            iscompleted: event.target.checked
        }))
    }

    const onDeleteClick = () => {
        dispatch(removeTodo(todo.id))
    }

    return <div key={todo.id}>
        {todo.name}
        <input
            type="checkbox"
            checked={todo.iscompleted}
            onChange={toggleChecked}
        ></input>
        <button onClick={onDeleteClick}>DELETE</button>
    </div>
}

export default TodoItem