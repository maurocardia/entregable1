import { useState } from 'react'
import QuoteBox from './QuoteBox '
import './App.css'
import quotes from "./quotes.json"
import ButtomQuote from './ButtomQuote'

const palettColors=["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#F9F871"]



function App() {
  const [count, setCount] = useState(0)

  const indexColor = Math.floor(Math.random()* palettColors.length)
  const randomColor = palettColors[indexColor]

  const [change, setChange] = useState (Math.floor(Math.random()* quotes.length))
  
  const buttonChange  = ()=>{
    
    setChange((Math.floor(Math.random()* quotes.length)))
    }


 document.body.style = `background: ${randomColor}`

  return (
    <div className="App">
      <div className='card'>
        <QuoteBox randomColor={randomColor} change={change} buttonChange={buttonChange}/>
        <ButtomQuote randomColor={randomColor } change={change} buttonChange={buttonChange}/>

      </div>
      
      
    </div>
  )
}

export default App
