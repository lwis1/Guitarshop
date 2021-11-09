import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch,useSelector } from 'react-redux';
import { listProductDetails, createProductReview, } from '../actions/productActions';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta'

const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const {loading, error, product} = productDetails

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const productReviewCreate = useSelector((state) => state.productReviewCreate)
    const {success:successProductReview, error: errorProductReview} = productReviewCreate

    useEffect( () => {
        if(successProductReview){
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET})
        }
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match, successProductReview])
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(match.params.id, {
            rating,
            comment,
        }))
    }
    return( 
        <>
            <Link  to='/'>
                <Button variant="link" size="sm"> go back</Button>
            </Link>
            
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Meta title={product.name}/>
                <Row style={{backgroundColor:"white"}}>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroupItem>Price: ${product.price}</ListGroupItem>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        price:
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                                
                                
                            </ListGroup.Item>
                            <ListGroup.Item><Row>
                                    <Col>
                                        Category:
                                    </Col>
                                    <Col>
                                        <strong>{product.category}</strong>
                                    </Col>
                                </Row></ListGroup.Item>
                            <ListGroup.Item><Row>
                                    <Col>
                                        Brand:
                                    </Col>
                                    <Col>
                                        <strong>{product.brand}</strong>
                                    </Col>
                                </Row></ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        status
                                    </Col>
                                    <Col>
                                        <strong>{product.countInStock >0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col md={6}>Qty</Col>
                        <Col md={1}>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                        <Col md={5} />
                      </Row>
                    </ListGroup.Item>
                  )}

                            
                                <Button type='submit' variant="success" size="bg"  disabled={product.countInStock === 0} onClick={addToCartHandler} >
                                    Add To Cart
                                </Button>
                            
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col >
                    <h1>Reviews</h1>
                    {product.reviews.length === 0 && <Message>No reviews</Message>}
                    <ListGroup>
                        {product.reviews.map(review => (
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} />
                                <p>{review.createdAt.substring(0,10)}</p>
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                        ))}
                                <br></br>
                                <h1>Write a Customer Review</h1>
                                <ListGroup.Item>
                                {errorProductReview && (<Message variant='danger'>{errorProductReview}</Message>)}
                                {userInfo ? (<Form onSubmit={submitHandler}>
                                    <Form.Group controlId='rating'>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                            <option value=''>Select...</option>
                                            <option value='1'>1 - Poor</option>
                                            <option value='2'>2 - Fair</option>
                                            <option value='3'>3 - Good</option>
                                            <option value='4'>4 - Very Good</option>
                                            <option value='5'>5 - Excellent</option>
                                            
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId='comment'>
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as='textarea' row='30' value={comment} onChange={(e) => setComment(e.target.value)}></Form.Control>
                                    </Form.Group>
                                    <Button type='submit' variant='primary'>
                                        Submit
                                    </Button>
                                </Form>) : <Message>Please <Link to='/login'>Sign in</Link>to write a review {' '}</Message>}
                            </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            </>
            )}
            
        </>
        )
    }


export default ProductScreen;
