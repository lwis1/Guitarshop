import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'
import {useSelector} from 'react-redux'

const PlaceOrderScreen = () => {
    const cart = useSelector(state=> state.cart)
    return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen
