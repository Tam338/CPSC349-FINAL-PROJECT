import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



import {X, Timer, Pause, Play, RotateCcw, Music, ClipboardList, Calendar as CalendarIcon } from 'lucide-react';

import './App.css'

function App() {

  const [timerButtons, setTimerButtons] = useState(false);
  const [played, setPlayed] = useState(false);

  const [music, setMusic] = useState(false);
  const [musicButtons, setMusicButtons] = useState(false)

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [iniTime, setIniTime] = useState(0);

  const [showCalendar, setShowCalendar] = useState(false);

  useEffect( () => {
    let id;
    if(isRunning && time > 0)
    {
      id = setInterval( () => {     
        setTime( (prev) => prev - 1000)
      }, 1000)
    } else if(time === 0)
    {
      setIsRunning(false);
    }

    return () => clearInterval(id);

  }, [isRunning, time] )

  function formatTime(){
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds = Math.floor(time / (1000) % 60);

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0'); 

    return `${minutes}:${seconds}`;  
  }

  return (
    <>
      <div className="main-page">
        <nav className="header">
          <button 
            onClick={ () => {
              setMusicButtons(false)
              setTimerButtons(!timerButtons) }}>
          <Timer size={50}/></button>

          <button onClick={ () => setShowCalendar(!showCalendar) }><CalendarIcon size={50}/></button>
          <button
            onClick={ () => { 
              setTimerButtons(false)
              setMusicButtons(!musicButtons) 
            }}
          ><Music size={50}/></button>
          <button><ClipboardList size={50}/></button>
        </nav>


        
        { timerButtons && (
          <div className='timer-buttons'
            >
            <div>
              <button
                onClick={ () => {
                  setTime(900000);
                  setIniTime(900000);
                  setIsRunning(true)
                  setTimerButtons(!timerButtons)
                }}>15</button>
              <button
                onClick={ () => {
                  setTime(1800000);
                  setIniTime(1800000);
                  setIsRunning(true)
                  setTimerButtons(!timerButtons)
                }}>30</button>
              <button
                onClick={ () => {
                  setTime(2700000);
                  setIniTime(2700000);
                  setIsRunning(true)
                  setTimerButtons(!timerButtons)
                }}>45</button>
              <button
                onClick={ () => {
                  setTime(3599000);
                  setIniTime(3599000);
                  setIsRunning(true)
                  setTimerButtons(!timerButtons)
                }}>60</button>
            </div>
            <div>
              <button onClick={ () => {
                setPlayed(!played)
                setIsRunning(!isRunning)}}>{ played ? <Play/> : <Pause/> }</button>
              <button onClick={ () => setTime(iniTime)}><RotateCcw/></button>
              <button onClick={ () => {
                setTime(0)
                setTimerButtons(false)
                }}><X/></button>
            </div>
          </div>
        )}

        { musicButtons && 
          <div className='music-button'>
            <button onClick={ () => {
                setPlayed(!played)
                setMusic(!music)}}>{ played ? <Play/> : <Pause/> }</button>
          </div>
        }

        <div className='display'> 
          { (time > 0) &&
            <div className='timer-display'>
              <h1>{formatTime()}</h1>
            </div>
          }

          {
            showCalendar && 
            <div>
              <Calendar/>
            </div>
          }
        </div>

        { music && 
          <iframe
          width="0"
          height="0"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
          title="Lofi Music"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        }

      </div>
    </>
  )
}

export default App
