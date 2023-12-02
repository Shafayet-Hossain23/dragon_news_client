import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../ContextAPi/UseContext';

const Register = () => {
    const { googleRegister } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const signHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)
        setSuccess(false)
        setError('')
        if (!(password === confirm)) {
            setError("Password don't match")
        }
        googleRegister(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess(true)
                form.reset()
            })
            .catch(error => {
                console.error(error)
                const errorMessage = error.message
                setError(errorMessage)
            })

    }
    return (
        <Form onSubmit={signHandler} className='me-5 ms-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='confirm' placeholder="Password" required />
            </Form.Group>
            <div>
                {
                    error && <p className='text-danger'>{error}</p>
                }
                {
                    success && <p className='text-success'>Successfully Register!</p>
                }
            </div>

            <Button variant="info" type="submit">
                Register
            </Button>
        </Form>
    );
};

export default Register;