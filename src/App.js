import React, { useState, useEffect } from 'react';

// Assets
import './css/styles.css';
import './assets/IconLibrary';
import 'C:/Users/black/OneDrive/Documents/WebCode/beat-kit/node_modules/bulma-switch/dist/css/bulma-switch.min.css'
import 'C:/Users/black/OneDrive/Documents/WebCode/beat-kit/node_modules/bulma-badge/dist/css/bulma-badge.min.css'
import 'C:/Users/black/OneDrive/Documents/WebCode/beat-kit/node_modules/bulma-modal-fx/dist/css/modal-fx.min.css'
// Components
import NavBar from './components/NavBar'
import Explore from './components/Explore'


export default function App() {

  return (
    <div>
      <NavBar/>
      <Explore/>

      <div id="modal-fadeInScale-fs" className="modal modal-full-screen modal-fx-fadeInScale">
    <div className="modal-content modal-card">
        <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="modal-button-close delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">

        </section>
        <footer className="modal-card-foot">
            <button className="modal-button-close button is-success">Save changes</button>
            <button className="modal-button-close button">Cancel</button>
        </footer>
    </div>
</div>
    </div>
  )

}

