import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button,Col,Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listUsers, deleteUser } from '../actions/userAction'
const UserListScreen = ({ history}) => {
    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList 

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin 

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete 

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    },[dispatch,userInfo, history, successDelete])
    const deleteHandler = (id) => {
        if(window.confirm('Are you sure')){
            dispatch(deleteUser(id))
        }
    }
    return (
        <>
            <br></br>
            <Row className='align-items-center'><Col></Col><Col>
            <h2>Users</h2>
            </Col><Col></Col></Row>
            <br></br>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'style={{borderCollapse: "separate",borderSpacing:"0 5px"}}>
                    <thead >
                        <tr>
                            <th style={{backgroundColor:"white" }}><i class="fas fa-fingerprint"> I D</i></th>
                            <th style={{backgroundColor:"silver" }}><i class="fas fa-ghost"> N A M E</i></th>
                            <th style={{backgroundColor:"white" }}><i class="fas fa-inbox"> E M A I L</i></th>
                            <th style={{backgroundColor:"silver" }}><i class="fas fa-user-cog"> A D M I N</i></th>
                            <th style={{backgroundColor:"white" }} ><i className="fas fa-calendar-week">EDIT/DELETE</i></th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor:"white" }}>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                <td>{user.isAdmin ? (<i className='fas fa-check' style={{color: 'green'}}></i>) : <i className='fas fa-times' style={{color: 'red'}}></i>}</td>
                                <td>
                                    <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(user._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default UserListScreen
