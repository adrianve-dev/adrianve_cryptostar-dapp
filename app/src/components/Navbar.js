import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className='navbar-brand p-1' href='' id='contract-address'>CryptoStar</a>
                <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav p-1 mr-auto">
                    <Link className='nav-item nav-link active' to='/stars'>Stars</Link>
                    <Link className='nav-item nav-link' to='/create'>Create</Link>
                    <Link className='nav-item nav-link' to='/search'>Search</Link>
                    {/* <a className='nav-item nav-link active' href='#'>Stars</a>
                    <a className='nav-item nav-link' href='#'>Create</a>
                    <a className='nav-item nav-link' href='#'>Look Up</a> */}
                </div>
                </div>
            </nav>
        )
    }
}