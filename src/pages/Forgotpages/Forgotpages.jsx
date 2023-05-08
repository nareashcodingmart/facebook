import React from 'react'
import "./Forgotpages.css"
import Fotter from "../../components/Fotter/Fotter"
import Findaccount from '../../components/Forgotpages/Findaccount/Findaccount'
import Forgotpagetop from '../../components/Forgotpages/Forgotpagetop/Forgotpagetop'
const Forgotpages = () => {
    document.title="Forgotten Password | Can't Log In | Facebook";
  return (
    <div className='forgotpages'>
        <Forgotpagetop/>
      
        <div className='forgotpagecenter'>
            <Findaccount/>
        </div>
      <div className='forgotpagefotter'>
      <Fotter/>
      </div>
    </div>
  )
}

export default Forgotpages
