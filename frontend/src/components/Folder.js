import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'

const Folder = ({ id, name, editFolder, deleteFolder }) => {
    const [show, setShow] = useState(false);

    const [newName, setName] = useState(name)


    const handleClose = () => {
    	setShow(false);
    	setName(name);
    }
    
    const handleShow = () => setShow(true);

    const editFolderHandler = (name) => {
    	handleClose()
    	const folder = {
    		id,
    		name,
    	}

    	editFolder(folder)

    	setName(name)
    }

	return (
		<>
		  <Row className='border-bottom pt-3'>

		    <Col>
		      <h5>{name}</h5>
		    </Col>

		    <Col md={2}>
		      <Form>
		        <Button variant='secondary' className='my-2 btn-block' onClick={handleShow}>Edit</Button>
		      </Form>

		      <Form>
		        <Button variant='danger' className='my-2 btn-block' onClick={() => deleteFolder(id)}>Delete</Button>
		      </Form>
		    </Col>
		  </Row>

		  <Modal show={show} onHide={handleClose}>
	        <Modal.Header>
	          <Modal.Title>Edit Folder "{name}"</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	<Form>
					<Form.Group controlId='title'>
					  <Form.Label>Name</Form.Label>
					  <Form.Control type='text' value={newName} onChange={e => setName(e.target.value)} />
					</Form.Group>

				</Form>
	        </Modal.Body>
	        <Modal.Footer>
				<Button variant="dark" onClick={() => editFolderHandler(newName)}>
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

export default Folder