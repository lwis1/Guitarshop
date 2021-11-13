import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import  { useDispatch, useSelector} from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
// import Paginate from '../components/Paginate'
// import AcousticCarousel from '../components/AcousticCarousel'
import {listCategoryProducts} from '../actions/productActions'
// import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'


const Others = () => {
    const dispatch = useDispatch()
    const productCategory = useSelector (state => state.productCategory)
    const { loading, error, products } = productCategory
    useEffect(() => {
        dispatch(listCategoryProducts("others"))
    }, [dispatch,])
    return (
        <>
        <Meta />
        <Link to='/' className='btn btn-link'>Go Back</Link>
        <h2 style={{borderRadius:"30px",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}> Acoustic guitars for you</h2>
        {
        loading ? 
        (<Loader></Loader>) 
        : error ? 
        (<Message variant='danger'>{error}</Message>) :( 
            <>
                <Row>
                    
                    {products.map( (product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </>
        )
        }
        </>
    )
}


export default Others
