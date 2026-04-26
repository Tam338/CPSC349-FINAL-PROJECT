import { useState } from 'react'
import { Calendar as CalendarIcon, Music, ClipboardList } from 'lucide-react'
import Calendar from 'react-calendar'

import TimerButton from './TimerButton.jsx'
import './App.css'

function App() {



  return (
    <>
      <div className="main-page">
        <nav className="header">
          <button><CalendarIcon size={50}/></button>
          <button><Music size={50}/></button>
          <button><ClipboardList size={50}/></button>
        </nav>
      </div>
    </>
  )
}

export default App
