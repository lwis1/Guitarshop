import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button,Col,Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listOrders } from '../actions/orderActions'
const OrderListScreen = ({ history}) => {
    const dispatch = useDispatch()

    const orderList = useSelector(state => state.orderList)
    const { loading, error, orders } = orderList 

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin 

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        } else {
            history.push('/login')
        }
    },[dispatch,userInfo, history])
    
    return (
        <>
            <br></br>
            <Row className='align-items-center' style={{backgroundColor:"#FDFEFE"}}><Col></Col><Col>
            <h1>Orders</h1>
            </Col><Col></Col></Row>
            <br></br>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm' style={{borderCollapse: "separate",borderSpacing:"0 15px"}}>
                    <thead style={{backgroundColor:"#D5F5E3"}}>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVRED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>${order.totalPrice}</td>
                                <td>{order.isPaid ? (order.paidAt.substring(0, 10)) : <i className='fas fa-times' style={{color: 'red'}}></i>}</td>
                                <td>{order.isDelevred ? (order.delevredAt.substring(0, 10)) : <i className='fas fa-times' style={{color: 'red'}}></i>}</td>
                                <td>
                                    <LinkContainer to={`/orders/${order._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                            Details
                                        </Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default OrderListScreen
