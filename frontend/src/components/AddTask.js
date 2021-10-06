import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const AddTask = ({ addTask }) => {
    const [title, setTitle] = useState('')
    
    const addTaskHandler = e => {
        e.preventDefault()
        addTask({
            title,
            completed: false,
        })
    }

    return (
            <Form>
                    <Form.Group controlId='title'>
                        <Form.Control type='text' placeholder='New Task' onChange={e => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Button variant='dark' submit='submit' className='my-2 btn-block' onClick={addTaskHandler}>Add</Button>
        </Form>
        
    )
}
export default AddTask