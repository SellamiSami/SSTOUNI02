import React, { Component } from 'react'
import logo from '../images/logo.png'
import { FaBars} from "react-icons/fa"
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'




export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Ezar Company" className="logo-header"  />
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaBars className="nav-icon"/>
                        </button>
                    </div> 
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
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
                            <NavLink to="/Projects" activeClassName="active" >Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" activeClassName="active" >Contact</NavLink>
                        </li>

                    </ul>
                </div> 
            </nav>
        )
    }
}
