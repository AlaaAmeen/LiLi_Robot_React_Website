import React, { Component } from 'react'

import NavbarMenu from './Components/NavbarMenu/NavbarMenu'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Componentss from './Components/Componentss/Componentss'
import HowToPlay from './Components/HowToPlay/HowToPlay'
import UpcomingGames from './Components/UpcomingGames/UpcomingGames'
import Feedback from './Components/Feedback/Feedback'

import './App.css'

export class App extends Component {

  render() {
    return (
      <div>
        <NavbarMenu />
        <p className = "gap"></p>
        <Home />
        <About />
        <Componentss />
        <HowToPlay />
        <UpcomingGames />
        <Feedback />
      </div>
    )
  }
}

export default App;
