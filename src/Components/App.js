import React from 'react';
import './App.css';
import Routes from './Routes';
import {Reset, Update} from '../Components';
import {Button, Alert, Card, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component{

    render(){
        return (
            /*<div className="App">
                <Navbar />
                <div className = "intro1">
                    <h1>Iochord Active Directory</h1>
                </div>
                <div className = "intro2">
                    <h2>User Information System</h2>
                </div>
                <Router>
                    <div className = "Buttons">
                        <Link to="/forgot"><Button style={{height:60,width:120, marginRight:20, background:'#435183'}}>
                            Reset Password
                        </Button></Link>
                        <Link to="/update"><Button style={{height:60, width:120, marginLeft:20, background:'#435183'}}>
                            Blank
                        </Button></Link>
                    </div>

                    <Route exact path = '/forgot' component={Forgot} />
                    <Route exact path = '/update' component={Update} />

                </Router>
            </div>*/

            <Routes />
        );
    }
}

export default App;