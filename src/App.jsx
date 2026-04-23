import { useState } from 'react'
import background from './assets/tux-linux.png'
import { Timer } from 'lucide-react'
import { Calendar } from 'lucide-react'
import { Music } from 'lucide-react'
import { ClipboardList } from 'lucide-react'

import './App.css'

function App() {
  
  return (
    <>
      <div className="main-page">
        <nav className="header">
          <button><Timer size={50}/></button>
          <button><Calendar size={50}/></button>
          <button><Music size={50}/></button>
          <button><ClipboardList size={50}/></button>
        </nav>
      </div>
    </>
  )
}

export default App
