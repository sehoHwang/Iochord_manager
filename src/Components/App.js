import React from 'react';
import './App.css';
import Routes from './Routes';
import {Button, Alert, Card, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoPersonCircleOutline } from 'react-icons/io5';
import {FaUserCheck, FaUserEdit} from 'react-icons/fa';
import ReactTouchEvents from "react-touch-events";

class App extends React.Component{

    handleTap = () => {
        console.log('Touch worked!');
    }

    render(){
        return (
            <div className="background">
                <div className="banner">
                    <img alt="logo" src="/logo3.png" className="Logo" style={{marginTop:20, marginLeft:20}}/>
                </div>
                <div style={{textAlign:'center', overflow:'hidden'}}>
                    <Container>
                    <Row>
                        <Col>
                            <div style={{marginTop: 200}} onClick={() => alert('Click!')}>
                                
                                 
                                <Card style={{color: '#000', height:180, width:280, borderRadius: 8, borderBottomWidth: 2, borderRightWidth:2, alignItems:'center', textAlign:'center'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Card.Text>Forgot PW</Card.Text>
                                            <FaUserCheck color="#9facc9" size="80"/>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                
                            </div>
                        </Col>
                        <Col>
                            <div style={{marginTop: 200}}>
                                <Card style={{color: '#000', height:180, width:280, borderRadius: 8, borderBottomWidth: 2, borderRightWidth:2, alignItems:'center',  textAlign:'center'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            <Card.Text>Change PW</Card.Text>
                                            <FaUserEdit color="#9facc9" size="80"/>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default App;