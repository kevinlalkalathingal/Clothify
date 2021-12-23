import React from 'react'
import logo from '../assets/logo.png';
import './Header.css';
import {Container, Row, Col} from 'react-bootstrap'

const Header = () => {
    return (
        <div className="header">     
                <Row>
                    <Col><img src={logo} alt="Logo" style={{height:"160px", marginLeft:"12px"}}/></Col>
                    <Col xs={8} className="brandname"><h1>Clothify</h1></Col>
                </Row>
            <hr />
        </div>
    )
}

export default Header;