import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({ history }) => {

    const cart = useSelector((state) => state.cart)
    const  {shippingAddress}  = cart
  
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
  
    const dispatch = useDispatch()
  
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
      history.push('/payment')
    }

    return (
        <FormContainer>
            <div style={{backgroundColor:"white",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)",borderRadius: "30px"}}>
            <CheckoutSteps step1 step2 />
            <h2 style={{borderRadius: "30px"}}>Shipping</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}> Address :</Form.Label>
                <Form.Control type="text"
                placeholder='Enter address'
                value={address}
                required
                onChange={ (e)=> setAddress(e.target.value)}></Form.Control>
                </Form.Group> 

                <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}> City :</Form.Label>
                <Form.Group controlId="city">
                <Form.Control type="text"
                placeholder='Enter city'
                value={city}
                required
                onChange={(e)=> setCity(e.target.value)}></Form.Control> 
                </Form.Group>
                
                <Form.Group controlId="postalCode">
                <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}> Postal Code :</Form.Label>
                <Form.Control type="text"
                placeholder='Enter postal code'
                value={postalCode}
                required
                onChange={(e)=> setPostalCode(e.target.value)}></Form.Control> </Form.Group>
                
                <Form.Group controlId="country">
                <Form.Label style={{ display: "flex", justifyContent: "center", fontSize:"1.2rem",color:"orangered",textDecoration: "underline"}}>Country :</Form.Label>
                <Form.Control type="text"
                placeholder='Enter Country'
                value={country}
                required
                onChange={(e)=> setCountry(e.target.value)}></Form.Control> </Form.Group>
                <br></br>
                    <div className="d-grid gap-2" >
                    <Button type='submit' variant='outline-success'>
                        <i class="fas fa-arrow-alt-circle-right"> C O N T I N U E </i>
                    </Button>
                    </div>
                    <br />
            </Form>
            </div>
        </FormContainer>
    )
}
export default ShippingScreen
