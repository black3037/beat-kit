import React, { useState, useEffect } from 'react';

// Assets
import './css/styles.css';
import './assets/IconLibrary';
import 'C:/Users/black/OneDrive/Documents/WebCode/beat-kit/node_modules/bulma-switch/dist/css/bulma-switch.min.css'
import 'C:/Users/black/OneDrive/Documents/WebCode/beat-kit/node_modules/bulma-badge/dist/css/bulma-badge.min.css'
// Components
import NavBar from './components/NavBar'
import Explore from './components/Explore'


export default function App() {

  return (
    <div>
      <NavBar/>
      <Explore/>
    </div>
  )

}

