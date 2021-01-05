import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class Forgot extends React.Component{
    render(){
        return(
            <div className = "Form">
                <Form>
                    <Form.Group>
                        <Form.Label>Administor ID</Form.Label>
                        <Form.Control placeholder="Input your ID"/>
                        <Form.Text>귀하의 계정을 입력해주세요</Form.Text>
                    </Form.Group>
                    <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit">Find</Button></div>
                </Form>
            </div>
        );
    }
}

export default Forgot;