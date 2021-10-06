import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const Task = ({ id, title, completeTask, editTask, deleteTask }) => {
    const [show, setShow] = useState(false);

    const [newTitle, setTitle] = useState(title)

    const handleClose = () => {
    	setShow(false);
    	setTitle(title);
    }
    
    const handleShow = () => setShow(true);

    const editTodoHandler = (title) => {
    	handleClose()
    	const task = {
    		id,
    		title,
    	}

    	editTask(task)

    	setTitle(title)
    }

	return (
		<>
		  <Row className='border-bottom pt-3'>
		    <Col md={1}>
		    <Form>
		      <Form.Check
		        type='checkbox'
		        onChange={() => completeTask(id)}
		      />
		    </Form>
		    </Col>

		    <Col>
		      <h5>{title}</h5>
		    </Col>

		    <Col md={2}>
		      <Form>
		        <Button variant='secondary' className='my-2 btn-block' onClick={handleShow}>Edit</Button>
		      </Form>

		      <Form>
		        <Button variant='danger' className='my-2 btn-block' onClick={() => deleteTask(id)}>Delete</Button>
		      </Form>
		    </Col>
		  </Row>

		  <Modal show={show} onHide={handleClose}>
	        <Modal.Header>
	          <Modal.Title>Edit Task "{title}"</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	<Form>
					<Form.Group controlId='title'>
					  <Form.Label>Title</Form.Label>
					  <Form.Control type='text' value={newTitle} onChange={e => setTitle(e.target.value)} />
					</Form.Group>

				</Form>
	        </Modal.Body>
	        <Modal.Footer>
				<Button variant="dark" onClick={() => editTodoHandler(newTitle)}>
	            	Save
	        	</Button>
	        	<Button variant="light" onClick={handleClose}>
	            	Close
	        	</Button>
	        </Modal.Footer>
	      </Modal>
		</>
	)
}

export default Task