import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="NavbarItems">
                <Link to="/"><img src="/logo4.png" height='60' style={{marginLeft:20}}/></Link>
                <div className="alignRight">
                    <Link to ="/certification"><a style={{color:'white', fontSize:14}}href="#">관리자 인증</a></Link>
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;