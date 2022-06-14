import React from 'react'
import { useSelector } from 'react-redux'
import ToDoItems from './ToDoItems'



function Todolist() {

const todos = useSelector(state => state.todo.todoList)
console.log(todos)
  return (
    <div>
{todos.map((el)=> (<ToDoItems  todo={el} />))}

    </div>
  )
}

export default Todolist