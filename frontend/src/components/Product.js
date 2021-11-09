import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
const Product = ({product}) => {
    return (
        
        <Card className='my-3 p-3 rounded' style={{ boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)" }}>
            <Link to={`/product/${product._id}`} >
                <Card.Img src={product.image} variant='top' height='250vw'  />
            </Link>
            
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating}
                    text={`${product.numReviews} reviews`} /> 
                </Card.Text>
                
                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Product
