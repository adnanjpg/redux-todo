import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../state/todoSlice"

export default () => {
    const [name, setName] = useState('')

    const dispatch = useDispatch()


    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        dispatch(addTodo(name))

        setName('')
    }

    return <form onSubmit={onSubmit}>
        <input
            value={name}
            onChange={onNameChange}
        ></input>
        <button type="submit">
            Add
        </button>
    </form>
}