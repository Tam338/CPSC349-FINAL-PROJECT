import { useState } from 'react'
import Calendar from 'react-calendar'

import TimerButton from './TimerButton.jsx'
import CalendarButton from './CalendarButton.jsx'
import MusicButton from './MusicButton.jsx'
import ListButton from './List.jsx'

import './App.css'

function App() {

  const [timerButtons, setTimerButtons] = useState(false);


  return (
    <>
      <div className="main-page">
        <nav className="header">
          <TimerButton 
            onMouseEnter={() => setTimerButtons(true)}
            onMouseLeave={ () => setTimerButtons(false) }/>
          <CalendarButton/>
          <MusicButton/>
          <ListButton/>
        </nav>

        { timerButtons && (
          <div className='timer-buttons'>
            <div>
              <button>15</button>
              <button>30</button>
              <button>45</button>
              <button>60</button>
            </div>
            <div>
              <button>pause</button>
              <button>restart</button>
            </div>
          </div>
        )}

        <div className='display'>
          <h1>something</h1>
        </div>
      </div>
    </>
  )
}

export default App
