import React, { useState } from 'react'
import Home from './pages/Homepage/Home'
import Loginpagesrouter from './pages/Loginpages/Loginpagesrouter'
import { createContext } from 'react';
export const Context=createContext();
const App = () => {
  
  let [login, setLogin] = useState(1);
  return (

    <>
    <Context.Provider value={[setLogin]}>
      {
        login === 0 ? <Loginpagesrouter/> : <Home/>
      }
      </Context.Provider>
    </>
  
  )
}

export default App
