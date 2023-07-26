import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componets/couter'
import List from './reducers/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
    <Counter/>
    <List/>
      </div>
      
    </>
  )
}

export default App
