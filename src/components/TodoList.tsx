import React from "react"
import { TodoListProps } from "../interfaces"


export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {

  if (todos.length === 0) {
    return <p className="center"> Task is not yet! </p>
  }

  return (
    <ul>
      { todos.map((todo) => {
        const classes = ['todo']

        if (todo.completed) {
          classes.push("completed")
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />

              <span> {todo.title} </span>

              <i
                className="material-icons red-text"
                onClick={() => onRemove(todo.id)}
              > delete </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}