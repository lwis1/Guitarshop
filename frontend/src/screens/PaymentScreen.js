import React, {useState} from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

 const PaymentScreen = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return ( 
    <FormContainer>
      <div style={{backgroundColor:"white",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",borderRadius: "30px"}}>
      <CheckoutSteps step1 step2 step3 />
      <h2 style={{borderRadius: "30px"}}>Payment Method</h2>
      <br />
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'> Select Method :</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>  */}
          </Col>
        </Form.Group>

        <br></br>
                    <div className="d-grid gap-2" >
                    <Button type='submit' variant='outline-success'>
                    <i class="fab fa-pied-piper-pp"> continue</i> 
                    </Button>
                    </div>
                    <br />
        
      </Form></div>
    </FormContainer>
  )
  }
export default PaymentScreen
