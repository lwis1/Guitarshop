import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userAction'

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
    if (userInfo) {
        history.push(redirect)
    }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
    <FormContainer >
        
        <div style={{backgroundColor:"white",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",borderRadius: "30px"}}>
        <h2 style={{borderRadius: "30px"}}>Sign In</h2>
        <br /> 
        <br /> 

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Email Address</Form.Label>
            <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
            <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Password</Form.Label>
            <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        </Form.Group>
        <br /> <br />
        <div className="d-grid gap-2" >
        <Button type='submit' variant='outline-success'>
        <i class="fas fa-sign-in-alt"> log in </i>
        </Button>
        </div>
    </Form>
    <br /> 
     
    <Row className='py-3'>
        <Col style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>
            New Customer?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register
            </Link>
        </Col>
        </Row>
        </div>
        <br />
    </FormContainer>
    
    )
}

export default LoginScreen
