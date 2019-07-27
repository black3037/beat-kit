import React, { useState, useEffect } from 'react';

// Assets
import './css/styles.css';
import './assets/IconLibrary';

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

