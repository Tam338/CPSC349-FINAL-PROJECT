import { useState } from 'react'
import Calendar from 'react-calendar'

import TimerButton from './TimerButton.jsx'
import CalendarButton from './CalendarButton.jsx'
import MusicButton from './MusicButton.jsx'
import ListButton from './List.jsx'

import './App.css'

function App() {



  return (
    <>
      <div className="main-page">
        <nav className="header">
          <TimerButton/>
          <CalendarButton/>
          <MusicButton/>
          <ListButton/>
        </nav>
      </div>
    </>
  )
}

export default App
