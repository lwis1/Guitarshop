import React, {useState} from 'react'
import {Form, Row, Col,Button} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push('/')
        }
    }
    return (
        <>
        <Row>
            <Col md={12} >
            <Form onSubmit={submitHandler} inline >
                    <Row className="align-items-center" md='sm' >
                        <Col md={2}></Col>
                        <Col md={9} style={{display: "flex", justifyContent: "center",margin:"2px 0px",padding:"0px"}}>
                        
                        <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder=' * Search Products ... *' size="sm" style={{borderRadius:"30px", maxHeight:"50px",margin:"0px 3px",padding:"0px",width:"350px"}}></Form.Control>
                        </Col>
                        <Col md={1} style={{  display: "flex", justifyContent: "center",margin:"2px 0px",padding:"0px"}}>
                        <Button type='submit' variant='outline-success' className='p-2' style={{borderRadius:"25px",maxHeight:"38px"}}>
                            <i className="fas fa-search"></i>
                        </Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            {/* <Col md={1}> </Col> */}
            {/* <Col md={2} >
                <LinkContainer to='/filter'>
                <div style={{  display: "flex", justifyContent: "center",margin:"2px 0px",padding:"0px"}}>
                    
                <Button variant="outline-info" className='p-2' style={{borderRadius:"20px",maxHeight:"40px"}}>
                        <i className="fas fa-filter">filter</i>
                </Button>
                </div></LinkContainer>
                </Col> */}
        </Row>
        <br />
        </>
    )
}

export default SearchBox
