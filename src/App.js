import { observer } from 'mobx-react';
import {store} from "./Mobx";
import React from 'react'
import Home from './pages/Homepage/Home'
import Loginpagesrouter from './pages/Loginpages/Loginpagesrouter'
import { createContext } from 'react';
export const Context=createContext();
const App = () => {  
  return (

    <>
      {
        store.Login === 0 ? <Loginpagesrouter/> : <Home/>
      }
    </>
  
  )
}


export default observer(App)
