import React from 'react';
import './App.css';
import Routes from './Routes';
import {Reset, Update, UpdateIP, UpdateDN} from '../Components';
import {Button, Alert, Card, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavbarAD} from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Welcome extends React.Component{

    state= {
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

    render(){
        
        if(!this.state.loading){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    {this.state.currentAD?
                        <div className="App">
                            <NavbarAD currentAD={this.state.currentAD}/>
                            <div className = "intro1">
                                <h1>Iochord Active Directory</h1>
                            </div>
                            
                            <div className = "intro2">
                                <h2>User Information System</h2>
                                
                            </div>
                            
                            <div className = "intro2">
                                <h2 style={{color:'#435183', fontWeight:'bold', fontSize:20}}>Admin Mode</h2>
                            </div>
                            <div className = "Buttons">
                                <Link to={{
                                    pathname: `/updateIP`,
                                    state: {
                                        currentAD: this.state.currentAD
                                    }
                                }}
                                >
                                <Button style={{height:60,width:120, marginRight:20, background:'#7080b8', borderWidth:0}}>
                                    Change IP
                                </Button></Link>

                                <Link to={{
                                    pathname: `/updateDN`,
                                    state: {
                                        currentAD: this.state.currentAD
                                    }
                                }}
                                ><Button style={{height:60, width:120, marginLeft:20, background:'#7080b8', borderWidth:0}}>
                                    Change Domain
                                </Button></Link>
                            </div>
                            <div className = "Buttons">
                                <Link to={{
                                    pathname: `/updateIP`,
                                    state: {
                                        currentAD: this.state.currentAD
                                    }
                                }}
                                >
                                <Button style={{height:60,width:120, marginRight:20, background:'#92a1d6', borderWidth:0}}>
                                    Change admin Dn
                                </Button></Link>

                                <Link to={{
                                    pathname: `/updateDN`,
                                    state: {
                                        currentAD: this.state.currentAD
                                    }
                                }}
                                ><Button style={{height:60, width:120, marginLeft:20, background:'#92a1d6', borderWidth:0}}>
                                    Change admin Pw
                                </Button></Link>
                            </div>
                            <Switch>
                                <Route exact path = '/updateDN' component={UpdateDN} />
                                <Route exact path = '/updateIP' component={UpdateIP} />
                            </Switch>
                        </div> :
                        <div className="App">
                            <Navbar />
                            <div className = "intro1">
                                <h1>Iochord Active Directory</h1>
                            </div>
                            <div className = "intro2">
                                <h2>User Information System</h2>
                            </div>
                            
                            <div className = "Buttons">
                                <Link to="/reset"><Button style={{height:60,width:120, marginRight:20, background:'#435183'}}>
                                    Reset Password
                                </Button></Link>
                                <Link to="/update/"><Button style={{height:60, width:120, marginLeft:20, background:'#435183'}}>
                                    Update password
                                </Button></Link>
                            </div>
                            <Switch>
                                <Route exact path = '/reset' component={Reset} />
                                <Route exact path = '/update' component={Update} />
                            </Switch>
                        </div>
                    }
                </div>
                
                
            )
        }
        
    }
}

export default Welcome;