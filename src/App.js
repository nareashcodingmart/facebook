import React, { useState } from 'react'
import Home from './pages/Homepage/Home'
import Loginpages from './pages/Loginpages/Loginpages'
import { createContext } from 'react';
// import Forgotpages from './pages/Forgotpages/Forgotpages';
export const Context=createContext();
const App = () => {
  
  let [login, setLogin] = useState(1);
  return (

    <>
    <Context.Provider value={[setLogin]}>
      {
        login === 0 ? <Loginpages/> : <Home/>
      }
      </Context.Provider>
    </>
    // <Forgotpages/>
  )
}

export default App
