import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import {Navbar, NavbarAD} from './Navbar';

var current = '';
var result = '';

class Reset extends React.Component{

    state={
        id: '',
        email: '',
        result: '',
        currentAD: '',
        loading: false
   }

   componentDidMount = () => {
        if(!this.props.location.state){
            this.setState({ loading : true})
            
        }
        else{
            this.setState({
                currentAD: this.props.location.state.currentAD,
                loading: true
            })
        }
    
    }

    handleChange = (event) => {
        this.setState({id: event.target.value});
        console.log(this.state.id);
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    handleSubmit = (e) => {
        console.log('handleSubmit')
        e.preventDefault(); 
        this.submitInfo();
    }

    goToMain = () => {
        this.props.history.push({
            pathname: '/',
            state: {currentAD: this.state.currentAD}
        })
    }

    submitInfo = async() => {
        //const { id } = this.state.id;
        console.log('pushPassword');
        console.log(this.state.id);
        await axios.post('http://192.168.11.84:5000/password?id='+this.state.id+'&email='+this.state.email)
        .then(res => {
            result = res.data;
            
        })
        .catch(function(err){
            console.log(err);
        })
        .finally(() => {
            alert(result);
        })
        this.goToMain();
    }

    render(){
        
        return(
            <div>
                {this.state.currentAD ?
                    <div className="App">
                        <NavbarAD currentAD={this.state.currentAD}/>
                        <div className = "Form">
                        <Form>
                            <Form.Group>
                                <Form.Label>User ID</Form.Label>
                                <Form.Control placeholder="Input your ID"
                                    defaultValue={this.state.id}
                                    onChange={this.handleChange}
                                />
                                <Form.Text >귀하의 계정을 입력해주세요</Form.Text>
                            </Form.Group>
                            <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit" onClick={this.handleSubmit}>Reset</Button></div>
                        </Form>
                        </div>
                    </div> :
                    <div className="App">
                        <Navbar />
                        <div className = "Form">
                            <Form>
                                <Form.Group>
                                    <Form.Label>User ID</Form.Label>
                                    <Form.Control placeholder="Input your ID"
                                        defaultValue={this.state.id}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Text >귀하의 계정을 입력해주세요</Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>User Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Input your Email"
                                        defaultValue={this.state.email}
                                        onChange={this.handleEmail}
                                        />
                                    <Form.Text>귀하의 이메일을 입력해주세요</Form.Text>
                                </Form.Group>
                                
                                <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit" onClick={this.handleSubmit}>Reset</Button></div>
                            </Form>
                        </div>
                    </div>
                }
                
            </div>
        );
        
        
    }
}

export default withRouter(Reset);