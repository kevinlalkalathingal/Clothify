import React, { Component } from 'react'
import './Navigations.css'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Navigations extends Component {
    render() {
        return (
            <div className="NavigationBar">                
                <ul className="NavLists">
                    <li><Link to="/"><Button variant="outline-dark" style={{textDecoration:"none", color:'#4496ce'}}>Home</Button></Link></li>
                    <br/>
                    <li><Link to="/men"><Button variant="outline-dark" style={{textDecoration:"none", color:'#4496ce'}}>Men</Button></Link></li>
                    <br/>
                    <li><Link to="/women"><Button variant="outline-dark" style={{textDecoration:"none", color:'#4496ce'}}>Women</Button></Link></li>
                    <br />
                    <li><Link to="/kids"><Button variant="outline-dark" style={{textDecoration:"none", color:'#4496ce'}}>Kids</Button></Link></li>
                </ul>
            </div>
        )
    }
}

export default Navigations;