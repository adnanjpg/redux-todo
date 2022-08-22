import { useDispatch } from "react-redux"
import ITodo from "../Iinterfaces/ITodo"
import { toggleTodo } from "../state/todoSlice"

const TodoItem: React.FC<ITodo> = (todo) => {
    const dispatch = useDispatch()

    const toggleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()

        dispatch(toggleTodo({
            id: todo.id,
            iscompleted: event.target.checked
        }))
    }

    return <div key={todo.id}>
        {todo.name}
        <input
            type="checkbox"
            checked={todo.iscompleted}
            onChange={toggleChecked}
        ></input>
    </div>
}

export default TodoItem