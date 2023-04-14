import React, { useState } from 'react'
import Home from './pages/Homepage/Home'
import Loginpages from './pages/Loginpages/Loginpages'
import { createContext } from 'react';
export const Context=createContext();
const App = () => {
  
  let [login, setLogin] = useState(1);
  return (

    <>
    <Context.Provider value={[login,setLogin]}>
      {
        login === 0 ? <Loginpages/> : <Home/>
      }
      </Context.Provider>
    </>
  )
}

export default App
