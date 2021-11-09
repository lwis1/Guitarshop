import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails , updateUserProfile} from '../actions/userAction'
import { listMyOrders } from '../actions/orderActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading:loadingOrders , error:errorOrders, orders } = orderListMy


  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if(!user.name || !user || success) {
        dispatch({type: USER_UPDATE_PROFILE_RESET})
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }

    }
  }, [dispatch, history, userInfo, user, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email,password}))
    }
  }

  return (
    <Row style={{display: "flex", justifyContent: "center"}}>
      <Col md={8} style={{backgroundColor:"#E5E8E8 "}}>
      <br /> 
      <h2>User Profile</h2>
      <br /> 
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {success && <Message variant='success'>Profile updated</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label  style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem", color:"orangered",textDecoration: "underline"}}>Name :</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label  style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem", color:"orangered",textDecoration: "underline"}}>Email Address :</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Password :</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem", color:"orangered",textDecoration: "underline"}}>Confirm Password :</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control><br />
        </Form.Group>
        <div className="d-grid gap-2" >
        <Button type='submit' variant='outline-success'>
        <i class="fas fa-upload"> U p d a t e </i>
        </Button>
        
        </div>
      </Form>
      </Col> 
      <Row >
      <Col md={12}>
      <br/><br/>
        <h2>My Orders</h2>
        <br /> 
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'style={{borderCollapse: "separate",borderSpacing:"0 5px"}} >
            <thead style={{backgroundColor:"orange" }}>
              <tr >
                <th style={{backgroundColor:"white" }}><i class="fas fa-id-card-alt"> I D</i></th>
                <th style={{backgroundColor:"silver" }}><i class="fas fa-clock"> D A T E</i></th>
                <th style={{backgroundColor:"white" }}><i class="fas fa-calculator"> T O T A L</i></th>
                <th style={{backgroundColor:"silver" }}><i class="fas fa-search-dollar"> P A I D</i></th>
                <th style={{backgroundColor:"white" }}><i class="fas fa-luggage-cart"> DELIVERED</i></th>
                <th style={{backgroundColor:"silver"}}>
                  <i className="fas fa-calendar-week">Details</i>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} style={{backgroundColor:"white" }}>
                  <td >{order._id}</td>
                  <td style={{backgroundColor:"#F4F4F4" }}>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td style={{backgroundColor:"#F4F4F4" }}>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td style={{backgroundColor:"#F4F4F4" }}>
                    <LinkContainer to={`/orders/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col></Row>
    </Row>
  )
  
}

export default ProfileScreen
