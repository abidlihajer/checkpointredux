import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

function ListTask() {
    const todos=useSelector(state=>state.todosReducer.todos)
  return (
    <div>{

         todos.map(todo=>(
            <Task todo={todo} key={todo.id} />
         ))

        }
    </div>
  )
}

export default ListTask