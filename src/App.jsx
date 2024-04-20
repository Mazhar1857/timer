import { useState } from 'react'
import './App.css'
import TimerClock from './component/TimerClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <TimerClock />
    </div>
  )
}

export default App
