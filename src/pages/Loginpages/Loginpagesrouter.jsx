import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Loginpages from './Loginpages';
import Forgotpages from "../Forgotpages/Forgotpages";
const Loginpagesrouter = () => {
  return (
   <Routes>
    <Route path="/" element={<Loginpages/>}/>
    <Route path="forgotpage" element={<Forgotpages/>}/>
   </Routes>
  )
}

export default Loginpagesrouter
