import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {NavbarAD} from './Navbar';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

class UpdateADPW extends React.Component{

    state={
        dnpassword: '',
        currentAD: '',
        loading: false,
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

    goToMain = () => {
        this.props.history.push({
            pathname: '/',
            state: {currentAD: this.state.currentAD}
        })
    }

    handleDNPassword = (event) => {
        this.setState({dnpassword: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.submitInfo();
    }

    submitInfo = async() => {
        var result="";
        console.log("보내기 전 비번 : " + this.state.dnpassword);
        await axios.post('http://192.168.11.84:5000/dnpassword?dnpassword='+this.state.dnpassword)
        
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
            <div className="App">
                <NavbarAD currentAD={this.state.currentAD}/>
                <div className = "Form">
                    
                    <Form>
                        <Form.Group>
                            <Form.Label>New DN Password</Form.Label>
                            <Form.Control
                                placeholder="Input your Domain"
                                defaultValue={this.state.dnpassword}
                                onChange={this.handleDNPassword}
                            />
                            <Form.Text>변경하실 새로운 DN 암호를 입력해주세요</Form.Text>
                        </Form.Group>
                        
                        <div style={{textAlign:'center', marginBottom:20}}>
                            <Button variant="secondary" type="submit"
                                onClick={this.handleSubmit}
                            >
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>
                
            </div>
               
        );
    }
}

export default withRouter(UpdateADPW);