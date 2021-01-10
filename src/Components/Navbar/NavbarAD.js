import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';



class NavbarAD extends React.Component{

    render(){
        return(
            <nav className="NavbarItems">
                <Link to={{
                    pathname: `/`,
                    state: {
                        currentAD: this.props.currentAD
                    }
                }}
                ><img src="/logo4.png" height='60' style={{marginLeft:20}}/></Link>
                <div className="alignRight">
                    <div style={{display:'inline-flex', marginRight:20}}>
                        <a style={{color:'#cec9d4', fontSize:16,fontWeight:'bold', paddingLeft: 20}}>관리자 모드 ON</a>
                    </div>
                    <div style={{display:'inline-flex', marginRight:20}}>
                        <Link to={{
                            pathname: `/`,
                            state: {
                                currentAD: ''
                            }
                        }}><a style={{color:'white', fontSize:14}}href="#">관리자 로그아웃</a></Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarAD;