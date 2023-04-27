import React from 'react'
import "./Findaccount.css"
import Inbutbox from '../../Inputbox/Inbutbox'
import { useState } from 'react'
const Findaccount = () => {
  const [data, setData] = useState({
    findaccount: ""
  });
  const valueupdate = (e) => {
    let obj = { ...data };
    obj[e.target.name] = e.target.value;
    setData(obj);
  }
  return (
    <div className='findaccount'>
      <div className='findaccounttitle'>
        Find Your Account
      </div>
      <div className='findaccountbody'>
        <div className='findaccountcontent1'>
          Please enter your email address or mobile number to search
          for your account.
        </div>
        <Inbutbox placeholder="Email address or mobile number" className="findaccountcontent2" type="text" name="findaccount" value={data.findaccount} onchange={valueupdate} />
        <div className='findaccountcontent3'>
          <button className='cancelbutton'>Cancel</button>
          <button className='searchbutton'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Findaccount
