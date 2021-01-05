import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="NavbarItems">
                <a href="#"><img src="/logo4.png" height='60' style={{marginLeft:20}}/></a>
            </nav>
        );
    }
}

export default Navbar;