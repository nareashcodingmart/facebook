import React, { useState } from 'react'
import "./Newpassword.css"
import Inbutbox from '../../Inputbox/Inbutbox'
import { store } from "../../../Mobx"
import { Valueupdate, Regex } from '../../../Util/Function/Function'
const Newpassword = () => {
    const [data, setData] = useState({
        password: "",
        mail: store.Findaccount
    })
    const [passwordwarning,setPasswordwarning]=useState({
        view:1,
        message:"You cannot use a blank password."
    })
    const [strength, setStrength] = useState(4);
    const [passshow, setPassshow] = useState(false)
    const [open, setOpen] = useState(false)
    const valueupdate = (e) => {
        Valueupdate(e, data, setData)
        Regex(data.password)
    }
    return (
        <div className='findaccount'>
            <div className='findaccounttitle'>
                Choose a new password
            </div>
            <div className='findaccountbody'>
            {passwordwarning.view?(<div className='otpwarning'>
                    <div className='otpwarningicon'><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/b1StE9EpZe2.png" alt=""/></div>
                    <div className='otpwarningmessage'>{passwordwarning.message}</div>
                </div>):""}
                <div className='otpcontent1'>
                    Create a new password that is at least 6 characters long. A strong password has a combination of letters, digits and punctuation marks.
                </div>
                <div className='newpasswordcontent1'>
                    <div className='newpasswordcontent2'>
                        <div className='newpasswordcontent2left'>
                            <Inbutbox className="choosepassword" placeholder="New password" type={passshow ? "password" : "text"} name="password" value={data.password} onchange={valueupdate} />
                            <button className='passshow clusor' onClick={() => setPassshow(!passshow)}>
                                {
                                    passshow ? "Show" : "Hide"
                                }
                            </button>
                        </div>
                        <button className='rulebutton clusor' onClick={() => setOpen(true)}>?</button>
                    </div>
                    <div className='newpasswordstrength'>
{
    strength===1 && <div className='tooshort'>Too short</div>
}
{
    strength>1 && <div className='passstrength'>Password strength:&nbsp;  
        {strength===2 &&<strong className='weakstrength'>Weak</strong>}
        {
         strength===3 &&<strong className='mediumstrength'>Medium</strong>
        }
        {
            strength===4&& <strong className='strongstrength'>Strong</strong>
        }
        </div>
}
                    </div>
                </div>
                <div className='findaccountcontent3'>
                    <button className='skipbutton clusor'>Skip</button>
                    <button className='searchbutton clusor'>Continue</button>
                </div>
            </div>

        </div>
    )
}

export default Newpassword
