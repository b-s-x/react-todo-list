import React, { useState } from "react"
import { TodoFormProps } from "../interfaces"


export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("")

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === "Enter") {
      props.onAdd(title)
      setTitle("")
    }
  }

  return (
    <div className="input-field mt2">
      <input
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        value={title}
        type="text" id="title"
        placeholder="Введите название дела"
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  )
}