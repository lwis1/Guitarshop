import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts} from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)

    const { loading , error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])
    return (
        <>
            <br></br>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Carousel pause='hover' className='bg-dark'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}  interval={2500}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid className="d-block w-10" />
                                <Carousel.Caption className='carousel-caption' >
                                    <h2>
                                        {product.name} (${product.price})
                                    </h2>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
            <br></br><br></br><br></br>
        </>
    )
}

export default ProductCarousel
