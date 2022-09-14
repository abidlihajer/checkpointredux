import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/todosActions';

function EditTodo({todo}) {
  const [show, setShow] = useState(false);
  const [text,setText]= useState(todo.text)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="text" value={text} onChange={e=>setText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTodo(todo.id,text));handleClose()}}>Save Change</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo