import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';



class NavbarAD extends React.Component{

    render(){
        return(
            <nav className="ADNavbarItems">
                <Link to={{
                    pathname: `/`,
                    state: {
                        currentAD: this.props.currentAD
                    }
                }}
                ><img src="/logo4.png" alt='메인 로고' height='60' style={{marginLeft:20}}/></Link>
                <div className="alignRight">
                    <div style={{display:'inline-flex', marginRight:20}}>
                        <a style={{color:'#93aaf5', fontSize:17,fontWeight:'bold', paddingLeft: 20}}>관리자 모드 ON</a>
                    </div>
                    <div style={{display:'inline-flex', marginRight:20}}>
                        <Link to={{
                            pathname: `/updateMail`,
                            state: {
                                currentAD: this.props.currentAD
                            }
                        }}><a style={{color:'white', fontSize:14}}href="#">메일 변경</a></Link>
                    </div>
                    <div style={{display:'inline-flex', marginRight:20}}>
                        <Link to={{
                            pathname: `/certification`,
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