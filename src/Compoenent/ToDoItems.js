import React from 'react'

function ToDoItems({todo}) {
  return (
    <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>

    </div>
  )
}

export default ToDoItems