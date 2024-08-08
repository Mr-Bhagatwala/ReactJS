import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts'
import TodoForm from './contexts/Components/TodoForm'
import TodoItem from './contexts/Components/TodoItem'

function App() {
const [todos,setTodos] = useState([])

const addTodo = (todo)=>{
  setTodos((prev)=>[{id:Date.Now,...todo},...prev])
}

const updateTodo = (id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo : prevTodo))
}

const deleteTodo = (id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}
const toggleComplete = (id)=>{
  setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo))
}


useEffect(() => {
  const todosStr = localStorage.getItem("todos");
  
  if (todosStr) {
    try {
      const todos = JSON.parse(todosStr);
      if (Array.isArray(todos) && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
    }
  }
}, []);


useEffect(()=>{
  JSON.stringify(localStorage.setItem("todos" , JSON.stringify(todos)))
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-white">Manage Your Todod</h1>

        <div className="mb-4">
            <TodoForm/>
        </div>

        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo)=>(
            <div key={todo.id}
            className='w-full'>
                <TodoItem todo={todo}/>
            </div>
          ))}
            
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
