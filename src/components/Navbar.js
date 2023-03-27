import React, { Component } from 'react'
import { FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa"
export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <nav className="navbar">
               
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <h2 className='hotel-navbar'>Hotel Donia </h2>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaBars className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <NavLink exact to="/" activeClassName="active" >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" activeClassName="active" >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Services" activeClassName="active" >Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Restaurant" activeClassName="active" >Restaurant</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/Projects" activeClassName="active" >Projects</NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/Contact" activeClassName="active" >Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="social-h">
                        <a href={'https://www.facebook.com/hoteldonia/'}>
                            <li><FaFacebookSquare className="nav-icon social-media-h" /></li>
                        </a>
                    </ul>
                </div>
            </nav>
        )
    }
}