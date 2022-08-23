import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    fetch('https://api.etherscan.io/api?module=account&action=balance&address=0x55B3206EDF167f5C7c6c143f1B299409835A5777&tag=latest&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA')
      .then((response) => response.json())
      .then((data) => setCount(data));
  }


  const deployLink = 'https://simplecrypto.vercel.app/'

  return (
    <div className="App">
      <h1>Simple Crypto</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App
