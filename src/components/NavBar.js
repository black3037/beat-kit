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
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#">
                  More
              </a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="#">
                    Overview
                </a>
                  <a class="navbar-item" href="#">
                    Modifiers
                </a>
                  <a class="navbar-item" href="#">
                    Columns
                </a>
                  <a class="navbar-item" href="#">
                    Layout
                </a>
                  <a class="navbar-item" href="#">
                    Form
                </a>
                  <hr class="navbar-divider"></hr>
                  <a class="navbar-item" href="#">
                    Elements
                </a>
                  <a class="navbar-item is-active" href="#">
                    Components
                </a>
                </div>
              </div>
            </div>
            <div className="navbar-end is-active">
              <a className="navbar-item is-size-4">
                <FontAwesomeIcon icon="user-circle" />
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless" href="#">
                <FontAwesomeIcon icon="ellipsis-v"/>
                </a>
                <div class="navbar-dropdown is-right">
                  <a class="navbar-item" href="#">
                    <FontAwesomeIcon icon="user-plus"/>
                    Sign Up
                </a>
                <hr class="navbar-divider"></hr>
                  <a className="navbar-item" href="#">
                    <FontAwesomeIcon icon="user"/>
                    Login
                </a>
                  <a class="navbar-item" href="#">
                    <FontAwesomeIcon icon="user-slash"/>
                    Logout
                </a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item" href="#">
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