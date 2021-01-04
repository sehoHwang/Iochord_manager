import { render } from '@testing-library/react';
import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/aladin">Aladin</Link></li>
                    <li><Link to="/lionking">lionking</Link></li>
                    <li><Link to="/spiderman">spiderman</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;