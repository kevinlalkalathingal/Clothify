import React from 'react'
import notfound from '../assets/404.png';
import Footer from './Footer';
import './PageNotFound.css'

export default function PageNotFound() {
    return (
        <div className="Content">
            <img style={{height:"230px", position:"absolute", left:"299px"}} src={notfound} alt="page not found"/>
            <Footer />  
        </div>
    )
}
