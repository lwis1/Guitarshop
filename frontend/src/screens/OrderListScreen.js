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
            <div >
            <Row className='align-items-center'><Col></Col><Col>
            <h2>Orders</h2>
            </Col><Col></Col></Row>
            <br></br>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'style={{borderCollapse: "separate",borderSpacing:"0 5px"}}>
                    <thead >
                        <tr>
                        <th style={{backgroundColor:"white" }}><i class="fas fa-passport"> I D</i></th>
                        <th style={{backgroundColor:"silver" }}><i class="fas fa-ghost">user NAME</i></th>
                        <th style={{backgroundColor:"white" }}><i class="fas fa-clock"> D A T E</i></th>
                        <th style={{backgroundColor:"silver" }}><i class="fas fa-calculator"> T O T A L</i></th>
                        <th style={{backgroundColor:"white" }}><i class="fas fa-search-dollar"> P A I D</i></th>
                        <th style={{backgroundColor:"silver" }}><i class="fas fa-luggage-cart"> DELIVERED</i></th>
                        <th style={{backgroundColor:"white"}}>
                            <i className="fas fa-calendar-week"> Details</i>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td style={{backgroundColor:"white" }}>{order._id}</td>
                                <td style={{backgroundColor:"silver" }} >{order.user && order.user.name}</td>
                                <td style={{backgroundColor:"white" }}>{order.createdAt.substring(0, 10)}</td>
                                <td  style={{backgroundColor:"silver" }}>${order.totalPrice}</td>
                                <td style={{backgroundColor:"white" }}>{order.isPaid ? (order.paidAt.substring(0, 10)) : <i className='fas fa-times' style={{color: 'red'}}></i>}</td>
                                <td  style={{backgroundColor:"silver" }}>{order.isDelevred ? (order.delevredAt.substring(0, 10)) : <i className='fas fa-times' style={{color: 'red'}}></i>}</td>
                                <td style={{backgroundColor:"white" }}>
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
            </div>
        </>
    )
}

export default OrderListScreen
