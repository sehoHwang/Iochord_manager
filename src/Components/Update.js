import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Navbar} from './Navbar';
import {withRouter} from 'react-router-dom'
import axios from 'axios';


class Update extends React.Component{

    state={
        id: '',
        password: '',
        newpassword: '',
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

    handleID = (event) => {
        console.log('id:'+this.state.id)
        this.setState({id: event.target.value});
    }

    handlePassword = (event) => {
        console.log('id:'+this.state.password)
        this.setState({password: event.target.value});
    }
    
    handleNewPassword = (event) => {
        console.log('id:'+this.state.newpassword)
        this.setState({newpassword: event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.submitInfo();
    }

    submitInfo = async() => {
        var result="";
        await axios.post('http://192.168.11.84:5000/newpassword?id='+this.state.id+'&password='+this.state.password+'&newpassword='+this.state.newpassword)
        .then(res => {
            result = res.data;
            if(result ==='귀하의 암호가 변경되었습니다.'){
                alert('귀하의 암호가 변경되었습니다.')
            }
            else{
                alert('정보가 일치하지 않습니다.')
            }
        })
        .catch(function(err){
            console.log(err);
        })
        .finally(() => {
            //alert(result);
        })
        this.goToMain();
    }

    goToMain = () => {
        this.props.history.push({
            pathname: '/',
            state: {currentAD: this.state.currentAD}
        })
    }

    render(){
        return(
            <div className = "App">
                <Navbar />
                <div className = "Form">
                    <Form>
                        <Form.Group>
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                placeholder="Input your ID"
                                defaultValue={this.state.id}
                                onChange={this.handleID}
                            />
                            <Form.Text>귀하의 계정을 입력해주세요</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>User Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Input your Password"
                                defaultValue={this.state.password}
                                onChange={this.handlePassword}
                                />
                            <Form.Text>귀하의 비밀번호를 입력해주세요</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Input your New Password"
                                defaultValue={this.state.newpassword}
                                onChange={this.handleNewPassword}
                                />
                            <Form.Text>새로운 비밀번호를 입력해주세요</Form.Text>
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

export default withRouter(Update);