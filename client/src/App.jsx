import { useState } from 'react';
import './App.css'
import UrlSearch from './components/urlSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UrlSearch/>
      
    </>
  )
}

export default App
