import React, { useState, useEffect } from "react"
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { ITodo } from "../interfaces"


export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]

    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {

    setTodos(
      todos.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed
        }

        return elem
      })
    )
  }

  const removeHandler = (id: number) => {
    setTodos((prev) => prev.filter((elem) => elem.id !== id))
  }

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />

    </>
  )
}