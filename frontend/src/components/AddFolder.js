import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const AddFolder = ({ addFolder }) => {
    const [name, setName] = useState('')
    
    const addFolderHandler = e => {
        e.preventDefault()
        addFolder({
            name,
            completed: false,
        })
    }

    return (
            <Form>
                    <Form.Group controlId='name'>
                        <Form.Control type='text' placeholder='New Task' onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Button variant='dark' submit='submit' className='my-2 btn-block' onClick={addFolderHandler}>Add</Button>
            </Form>
        
    )
}
export default AddFolder