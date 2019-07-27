import React, { setState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Main navigation bar
function NavBar(props) {

    return(
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <a className="navbar-item">
              <b className="is-size-3">BeatKit&#160;</b>
            </a>
  
            <a className="navbar-item">Explore</a>
            <a className="navbar-item">My Kits</a> 
  
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#">
                  More
              </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="#">
                    Overview
                </a>
                  <a className="navbar-item" href="#">
                    Modifiers
                </a>
                  <a className="navbar-item" href="#">
                    Columns
                </a>
                  <a className="navbar-item" href="#">
                    Layout
                </a>
                  <a className="navbar-item" href="#">
                    Form
                </a>
                  <hr className="navbar-divider"></hr>
                  <a className="navbar-item" href="#">
                    Elements
                </a>
                  <a className="navbar-item is-active" href="#">
                    Components
                </a>
                </div>
              </div>
            </div>
            <div className="navbar-end is-active">
              <a className="navbar-item is-size-4">
                <FontAwesomeIcon icon="user-circle" />
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless" href="#">
                <FontAwesomeIcon icon="ellipsis-v"/>
                </a>
                <div className="navbar-dropdown is-right">
                  <a className="navbar-item" href="#">
                    <FontAwesomeIcon icon="user-plus"/>
                    Sign Up
                </a>
                <hr className="navbar-divider"></hr>
                  <a className="navbar-item" href="#">
                    <FontAwesomeIcon icon="user"/>
                    Login
                </a>
                  <a className="navbar-item" href="#">
                    <FontAwesomeIcon icon="user-slash"/>
                    Logout
                </a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item" href="#">
                  <FontAwesomeIcon icon="user-cog"/>
                  Settings
                </a>
                </div>
              </div>
            </div>
            </div>
        </nav>
    )
}

export default NavBar