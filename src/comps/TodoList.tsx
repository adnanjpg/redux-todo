import { useSelector } from "react-redux"
import { selectTodos } from "../state/store"

import TodoItem from "./TodoItem"


export default () => {
    let todos = useSelector(selectTodos)

    return <div>
        {todos.map(e => TodoItem(e))}
    </div>
}
