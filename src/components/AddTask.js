import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todosActions'

function AddTask() {
  const[text,setText]=useState('')
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.trim()){
    dispatch(addTodo(text));
    setText('')
    }else{
      alert('text is not required!')
    }
  }
  return (
    
      <Form onSubmit={handleSubmit} style={{width:"50%",margin:"30px auto",display:"flex"}}>
        <FormControl type='text' value={text} onChange={e=>setText(e.target.value)} />
        <Button type='submit' variant='secondary' >Add</Button>
      </Form>
   
  )
}

export default AddTask