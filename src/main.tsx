import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const uicodeInfo ={
  name: "UiiCode",
  age: 33,
}

const UiCodeContext = createContext(uicodeInfo);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UiCodeContext.Provider value={uicodeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UiCodeContext.Provider>
);

export default UiCodeContext;
