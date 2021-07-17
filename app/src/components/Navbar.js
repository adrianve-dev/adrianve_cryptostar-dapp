import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { CONTRACT_ADDRESS } from '../utils/APP_CONSTANTS'

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className='navbar-brand p-1' href={CONTRACT_ADDRESS} target="_blank" id='contract-address'>CryptoStar</a>
                <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav p-1 mr-auto">
                    <Link className='nav-item nav-link active' to='/stars'>Stars</Link>
                    <Link className='nav-item nav-link' to='/create'>Create</Link>
                    <Link className='nav-item nav-link' to='/search'>Search</Link>
                </div>
                </div>
            </nav>
        )
    }
}