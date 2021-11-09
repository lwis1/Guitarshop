import React from 'react'
// import {Spinner} from 'react-bootstrap'
import { CDBSpinner, CDBContainer } from "cdbreact";
const Loader = () => {
    return (
        <>
        <br /><br /><br /><br /><br />
        <CDBContainer>
            <CDBSpinner multicolor style={{
            width:'80px',
            height:'80px',
            margin:'auto',
            display: "flex", 
            justifyContent: "center",
        }}/>
        </CDBContainer>
        {/* <Spinner animation='border'
        role='status'
        variant="success"
        style={{
            width:'80px',
            height:'80px',
            margin:'auto',
            display: "flex", 
            justifyContent: "center",
        }} /> */}
        </>        
    )
}

export default Loader
