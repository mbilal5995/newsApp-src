import React, { Component } from 'react'
import "../Components/style.css"

export class Navbar extends Component {
    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid ">
                        <a className="navbar-brand text-white"  href="/">NewsMonk</a>
                    
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 ">
                                <li className="nav-item">
                                    <a className="nav-link text-white"  href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar