import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
const ProductListScreen = ({ history, match}) => {
    const pageNumber =match.params.pageNumber || 1
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList 

    const productDelete = useSelector(state => state.productDelete)
    const { loading: loadingDelete, error:errorDelete, success: successDelete } = productDelete  

    const productCreate = useSelector(state => state.productCreate)
    const { loading: loadingCreate, error:errorCreate, success: successCreate, product: createdProduct } = productCreate  

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin 

    useEffect(() => {
        dispatch({type: PRODUCT_CREATE_RESET})
        if(!userInfo.isAdmin){
            history.push('/login')
        }
        if(successCreate){
            history.push(`/admin/product/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts('', pageNumber))
        }
        
    },[dispatch, userInfo, history, successDelete, successCreate , createdProduct, pageNumber])
    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')){
            dispatch(deleteProduct(id))
        }
    }
    const createProductHandler = () => {
        dispatch(createProduct())
    }
    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h2>Products</h2>
                </Col>
                <Col></Col><Col></Col>
                <Col className='text-right'>
                    <Button className='my-3' onClick={createProductHandler}>
                        <i className='fas fa-plus'> {' '} </i> Create Product
                    </Button>
                </Col>
            </Row>
            <br></br>
            {loadingDelete && <Loader /> }
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
            {loadingCreate && <Loader /> }
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Table striped bordered hover responsive className='table-sm'style={{borderCollapse: "separate",borderSpacing:"0 5px"}}>
                    <thead >
                        <tr>
                            <th style={{backgroundColor:"white" }}><i class="fas fa-passport"> I D</i></th>
                            <th style={{backgroundColor:"silver" }}><i class="fas fa-signature"> N A M E</i></th>
                            <th style={{backgroundColor:"white" }}><i class="fas fa-money-bill-wave"> P R I C E </i></th>
                            <th style={{backgroundColor:"silver" }}><i class="fas fa-guitar"> C A T E G O R Y</i></th>
                            <th style={{backgroundColor:"white" }}><i class="fab fa-bandcamp"> B R A N D</i></th>
                            <th style={{backgroundColor:"silver" }}>
                                <i className="fas fa-calendar-week">EDIT/DELETE</i>
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor:"white" }}>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td style={{backgroundColor:"white" }}>{product._id}</td>
                                <td>{product.name}</td>
                                <td style={{backgroundColor:"white" }}>{product.price}</td>
                                <td>{product.category}</td>
                                <td style={{backgroundColor:"white" }}>{product.brand}</td>
                                <td>
                                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Paginate pages={pages} page={page} isAdmin={true} />
                </>
            )}
        </>
    )
}

export default ProductListScreen
