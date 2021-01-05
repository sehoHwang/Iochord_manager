import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';

var current = '';

class Forgot extends React.Component{

    state={
        id: '',
    }

    handleChange = (event) => {
        this.setState({id: event.target.value});
        console.log(this.state.id);
    }

    handleSubmit = (id) => {
        current = this.state.id;
        this.pushPassword();
    }

    pushPassword = async() => {
        //const { id } = this.state.id;
        console.log(this.state.id);
        await axios.get('http://172.26.127.17:5000/password?id='+current)
        .then(res => {
            
        })
        
    }

    render(){
        return(
            <div className = "Form">
                <Form>
                    <Form.Group>
                        <Form.Label>Administor ID</Form.Label>
                        <Form.Control placeholder="Input your ID"
                            defaultValue={this.state.id}
                            onChange={this.handleChange}
                        />
                        <Form.Text >귀하의 계정을 입력해주세요</Form.Text>
                    </Form.Group>
                    <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit" onClick={()=>this.handleSubmit(this.state.id)}>Find</Button></div>
                </Form>
            </div>
        );
    }
}

export default Forgot;