
import { useEffect, useState , useContext} from 'react'
import './App.css'
import UiCodeContext from "./main"

function App() {
  const [count , setCount] =useState(0);
  const uicodeInfo = useContext(UiCodeContext);
 
  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
   console.log("hello hooks")
   //setCount(count + 1);
  },[count]);

  return (
    <>
      <div className='App'>
       <h1>UseState, UseEffect</h1>
       <button onClick={handleClick}>click</button>
       <p>{count}</p>
      </div>
      

      <br  />
      <h1>uesContext</h1>
      <p>{uicodeInfo.name}</p>
      <p>{uicodeInfo.age}</p>
    </>
  )
}

export default App
