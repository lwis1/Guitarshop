import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import  { useDispatch, useSelector} from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'



const HomeScreen = ({match}) => {
    const keyword = match.params.keyword

    const pageNumber= match.params.pageNumber || 1

    const dispatch = useDispatch()
    const productList = useSelector (state => state.productList)
    const { loading, error, products, pages, page } = productList
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch,keyword, pageNumber])

    return (
        <>
        <Meta />
        {!keyword ? <> <ProductCarousel /> <br/> </>: <Link to='/' className='btn btn-link'>Go Back</Link>}
        {
        loading ? 
        (<Loader></Loader>) 
        : error ? 
        (<Message variant='danger'>{error}</Message>) :( 
            <>
                <Row>
                    <h1 style={{borderRadius:"30px",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}> p r o d u c t s</h1>
                    {products.map( (product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                        <Product product={product} />
                        </Col>
                    ))}
                </Row>
                <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
            </>
        )
        }
        </>
    )
}
export default HomeScreen