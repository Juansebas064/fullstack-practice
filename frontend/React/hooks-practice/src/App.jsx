import { useState } from 'react';

import './App.css'

// Main function to init todo list and render the components
export default function App() {
  const [todos, setToDo] = useState([
    { id: 1, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ])

  return (
    <div>
      <h1>Todo List</h1>
      <ShowTodoList todos={todos} />
      <AddToDo setToDo={setToDo} />
    </div>
  )
}

// Function that print the initial todo list
function ShowTodoList({ todos }) {  // Destructuring {}
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={todo.done ? "done" : "ongoing"}>
          {todo.text}
        </li>))}
    </ul>
  )
}

// Function to add todos
function AddToDo({ setToDo }) {
  function handleAddToDo(event) {
    event.preventDefault();
    const text = event.target.elements.addToDo.value
    event.target.elements.addToDo.value = ""
    setToDo(previousState => {
      const todo = {
        id: previousState.length + 1,
        text: text,
        done: true
      }
      return [...previousState, todo]
    })
  }

  return (
    <form onSubmit={handleAddToDo}>
      <input placeholder='Add to do' name='addToDo' />
      <button type="submit">Submit</button>
    </form>
  )
}