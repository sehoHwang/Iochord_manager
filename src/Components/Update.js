import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class Update extends React.Component{
    render(){
        return(
            
            <div className = "Form">
                <Form>
                    <Form.Group>
                        <Form.Label>Administor ID</Form.Label>
                        <Form.Control placeholder="Input your ID"/>
                        <Form.Text>귀하의 계정을 입력해주세요</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Administor Password</Form.Label>
                        <Form.Control type="password" placeholder="Input your Password"/>
                        <Form.Text>귀하의 비밀번호를 입력해주세요</Form.Text>
                    </Form.Group>
                    <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit">Reset</Button></div>
                </Form>
            </div>
               
        );
    }
}

export default Update;