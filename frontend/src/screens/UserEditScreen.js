import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser    } from '../actions/userAction'
import { USER_UPDATE_RESET } from '../constants/userConstants'

const UserEditScreen = ({ match, history }) => {
    const userId = match.params.id
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    
    useEffect(() => {
        if(successUpdate){
            dispatch({ type: USER_UPDATE_RESET})
            history.push('/admin/userList')
        } else {
            if(!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
        
    }, [dispatch, userId, user, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser( { _id : userId, name, email, isAdmin } ))
    }

    return (
        <>
            <Link to='/admin/userlist' className='btn btn-link my-3'>
                Go Back
            </Link>
            <FormContainer>
            <div style={{backgroundColor:"white",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",borderRadius: "30px"}}>
            <h2 style={{borderRadius: "30px"}}>Edit User</h2>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variantt='danger'>{errorUpdate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <br></br>

                <Form.Group controlId='isadmin' style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>
                    <Form.Check
                        type='checkbox'
                        label='Is Admin'
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    ></Form.Check>
                </Form.Group>

                <br />

                <div className="d-grid gap-2" >
                    <Button type='submit' variant='outline-success'>
                        <i class="fas fa-pencil-alt"> u p d a t e </i>
                    </Button>
                </div>
                <br />
            </Form>
            
        ) }
        </div>
    </FormContainer>
    </>
    )
}

export default UserEditScreen