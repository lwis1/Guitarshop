import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import  { addToCart, removeFromCart} from '../actions/cartActions'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'

const CartScreen = ({ match, location, history}) => {

    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    },[dispatch,productId, qty]
    )
    const removeFromCartHandler =(id) => {
        dispatch(removeFromCart(id))
    }
    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    return (
        <div style={{backgroundColor:"white",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}>
        <Row>
            <Col md={8}>
                <h2>Shopping Cart</h2>
                {cartItems.lenght === 0 ? (
                    <Message>
                        Your Cart is empty
                    </Message>    
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>{item.price}</Col>
                                    <Col md={2}>
                                    <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) => dispatch(addToCart(item.product,Number(e.target.value)))}
                        >
                            {[...Array(item.countInStock).keys()].map(
                                (x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                )
                            )}
                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='black' onClick={() => removeFromCartHandler(item.product)}>
                                            <i className='fas fa-trash' style={{color : 'red'}}></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>    
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) :
                            </h2>
                            $({cartItems.reduce( (acc, item) => acc + item.qty * item.price, 0).toFixed(2)})
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length === 0} onClick={checkOutHandler}>
                                Process To checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>    
    )
}

export default CartScreen
