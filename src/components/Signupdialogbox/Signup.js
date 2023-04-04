import { Dialog } from '@material-ui/core'
import React from 'react'
import "./Signup.css";
const Signup = (props) => {
  return (
    <Dialog open={props.signup} className="outer">
        <div className='signup'>
        <img onClick={props.dialogbox} src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png" draggable="false" alt="" />
        <div className='signup-top'>
          <div> Sign UP</div>
          <div>It's quick and easy.</div>
        </div>
        </div>

    </Dialog>
  )
}

export default Signup
