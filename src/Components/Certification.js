import React from 'react';
import './App.css';
import Routes from './Routes';
import {Reset, Update} from '../Components';
import {Button, Card, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import axios from 'axios';
import {Alert} from 'reactstrap';


class Certification extends React.Component{
    state={
        adID: "",
        adPassword: "",
        currentAD: "",
        visible: false
    }

    toggle(){
        this.setState({
            visible: !this.state.visible
        })
    }

    handleAdID = (event) => {
        this.setState({adID: event.target.value});
        console.log(this.state.adID);
    }

    handleAdPW = (event) => {
        this.setState({adPassword: event.target.value});
        console.log(this.state.adPassword);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.confirmAdmin();
    }

    goToMain = () => {
        this.props.history.push({
            pathname: '/',
            state: {currentAD: this.state.currentAD}
        })
    }

    confirmAdmin = async() => {
        
        var result = "";
        const adID = this.state.adID;
        console.log(adID);
        await axios.get('http://192.168.11.84:5000/admin?adminID='+this.state.adID+'&adminPW='+this.state.adPassword)
        .then(res => {
            result = res.data;
            console.log(result);
            if(result){
                this.setState({
                    currentAD: adID
                });

            }
            
        })
        .catch(function(err){
            console.log('err + ' + err);
        })
        .finally(() => {
            if(this.state.currentAD){
                alert('관리자 인증이 완료되었습니다.')
                this.goToMain();
            }    
            else
                alert('일치하는 관리자가 없습니다.')
        })
        
    }
    

    render(){
        return (
            <div className="App">
                <Navbar />
                <div className = "intro1">
                <h2>Admin Certification</h2>
                </div>
                <div className = "intro2">
                    
                </div>
                
                <div className = "Form">
                    <Form>
                        <Form.Group>
                            <Form.Label>Administor ID</Form.Label>
                            <Form.Control placeholder="Input your admin ID"
                                defaultValue={this.state.adID}
                                onChange={this.handleAdID}
                            />
                            <Form.Text >관리자 계정을 입력해주세요</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Administor Password</Form.Label>
                            <Form.Control placeholder="Input your admin Password"
                                defaultValue={this.state.adPassword}
                                onChange={this.handleAdPW}
                            />
                            <Form.Text >관리자 암호를 입력해주세요</Form.Text>
                        </Form.Group>
                        <div style={{textAlign:'center', marginBottom:20}}><Button variant="secondary" type="submit" onClick={this.handleSubmit}>Confirm</Button></div>
                    </Form>
                    <Alert color = "primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>관리자 인증이 완료되었습니다.</Alert>
                </div>
            </div>
        );
    }
}

export default withRouter(Certification);