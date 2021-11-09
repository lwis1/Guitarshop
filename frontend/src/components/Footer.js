import React from 'react'
import { Col , Row, Image} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { MDBAnimation } from "mdbreact";


const footer = () => {
    return (
        <footer >
            <Row>
                <Col md={2}>
                    {/* <LinkContainer to='/'>
                        <Nav.Link >
                            <i className='fas fa-home' style={{color:"orangered", fontSize:"20px"}}> Home</i>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/'>
                        <Nav.Link >
                            <i className='fas fa-info-circle' style={{color:"orangered", fontSize:"20px"}}> About</i>
                        </Nav.Link>
                    </LinkContainer>
                    
                     */}
                </Col>
                <Col md={8}>
                <LinkContainer to='/'>
                    <MDBAnimation type="bounce" infinite>
                    
                    <Image alt="" src="/logo.png" width="200" height="150" roundedCircle />
                    <br />
                    <h4>Guitar shop</h4>
                    
                    </MDBAnimation></LinkContainer>
                    
                </Col>
                <Col md={2}>
                    {/* <LinkContainer to='/cart'>
                        <Nav.Link >
                            <i className='fas fa-shopping-cart' style={{color:"orangered", fontSize:"20px"}}> Cart</i>
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/profile'>
                        <Nav.Link >
                            <i className='fas fa-user' style={{color:"orangered", fontSize:"20px"}}> Profile</i>
                        </Nav.Link>
                    </LinkContainer> */}
                    
                </Col>
            </Row>
            <br />
            
            <MDBBtn tag='a' color='none' size='lg' className='m-1' style={{ color: '#3b5998' }}>
                <MDBIcon fab icon='facebook-f' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' size='lg' className='m-1' style={{ color: '#55acee' }}>
                <MDBIcon fab icon='twitter' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' size='lg' className='m-1' style={{ color: '#dd4b39' }}>
                <MDBIcon fab icon='google' size='lg' />
            </MDBBtn>

            <MDBBtn tag='a' color='none' size='lg' className='m-1' style={{ color: '#ac2bac' }}>
                <MDBIcon fab icon='instagram' size='lg' />
            </MDBBtn>

            <Image alt="" src="/paypallogo.png" width="150" height="50"  style={{ boxShadow: "12px 12px 2px 1px black" }}/>
            
            <br />
            <div style={{color :"Highlight"}}>Copyright &copy; Guitar shop</div>
        </footer>
    )
}

export default footer
