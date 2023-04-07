import React, { useState } from 'react'
import Home from './pages/Homepage/Home'
import Loginpages from './pages/Loginpages/Loginpages'
const App = () => {
  
  let [login, setLogin] = useState(0);
  const changedisplay = () => {
    setLogin(login === 0 ? 1 : 0)
  }
 
  return (

    <>
      {
        login === 0 ? <Loginpages changedisplay={changedisplay} /> : <Home changedisplay={changedisplay} />
      }
    </>
  )
}

export default App
