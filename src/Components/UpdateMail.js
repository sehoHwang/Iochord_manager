import React from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {NavbarAD} from './Navbar';
import {withRouter} from 'react-router-dom'
import axios from 'axios';


class UpdateMail extends React.Component{

    state={
        mail: '',
        password: '',
        currentAD: '',
        loading: false,
    }

    componentDidMount = () => {
        console.log('받아온 currentAD : '+this.props.location.state.currentAD)
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

    handleMail = (event) => {
        this.setState({mail: event.target.value});
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value});
    }
    

    handleSubmit = (e) => {
        e.preventDefault(); 
        this.submitInfo();
    }

    submitInfo = async() => {
        var result="";
        await axios.post('http://192.168.11.84:5000/mail?mail='+this.state.mail+'&password='+this.state.password)
        .then(res => {
            result = res.data;
            console.log(result);
            if(result ==='메일 정보가 변경되었습니다.'){
                alert('메일 정보가 변경되었습니다.')
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
                <NavbarAD currentAD={this.state.currentAD}/>
                <div className = "Form">
                    <Form>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Input your ID"
                                defaultValue={this.state.id}
                                onChange={this.handleMail}
                            />
                            <Form.Text>메일을 입력해주세요</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Input your Password"
                                defaultValue={this.state.password}
                                onChange={this.handlePassword}
                                />
                            <Form.Text>메일 비밀번호를 입력해주세요</Form.Text>
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

export default withRouter(UpdateMail);