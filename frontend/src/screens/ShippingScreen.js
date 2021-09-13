import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({history}) => {

    const cart = useSelector( state=> state.cart )

    const   shippingAddress   = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler =(e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')
   }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text"
                placeholder='Enter address'
                value={address}
                required
                onChange={ (e)=> setAddress(e.target.value)}></Form.Control>
                </Form.Group> 
                 
                 
                <Form.Label>city</Form.Label>
                <Form.Group controlId="city">
                <Form.Control type="text"
                placeholder='Enter city'
                value={city}
                required
                onChange={(e)=> setCity(e.target.value)}></Form.Control> </Form.Group>
                
                <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text"
                placeholder='Enter postal code'
                value={postalCode}
                required
                onChange={(e)=> setPostalCode(e.target.value)}></Form.Control> </Form.Group>
                
                <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text"
                placeholder='Enter Country'
                value={country}
                required
                onChange={(e)=> setCountry(e.target.value)}></Form.Control> </Form.Group>
                
                
                <br></br>
                <div className="d-grid gap-2">
                    <Button type='submit' variant="outline-success" size="sm">
                        <h3>Continue</h3>
                    </Button>
                </div>
            </Form>
        </FormContainer>
        )
        // <FormContainer>
        //     <CheckoutSteps step1 step2 />
        //     <h1>Shipping</h1>
        //     <Form onSubmit={submitHandler}>
        //     <Form.Group>
        //         <Form.Label>Address</Form.Label>
        //         <Form.Control type='address' placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>city</Form.Label>
        //         <Form.Control type='city' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>postalCode</Form.Label>
        //         <Form.Control type='postalCode' placeholder='Enter postalCode' value={postalCode} onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
        //     </Form.Group>
        //     <Form.Group>
        //         <Form.Label>Country</Form.Label>
        //         <Form.Control type='country' placeholder='Enter Country' value={country} onChange={(e) => setCountry(e.target.value)}></Form.Control>
        //     </Form.Group>
        //     <br></br>
        //     <div className="d-grid gap-2">
        //     <Button type='submit' variant="outline-success" size="sm">
        //         <h3>Continue</h3>
        //     </Button>
        //     </div>
        //     </Form>
        // </FormContainer>
    
    }
export default ShippingScreen
