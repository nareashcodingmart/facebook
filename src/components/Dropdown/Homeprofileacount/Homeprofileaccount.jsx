import React from 'react'
import "./Homeprofileaccount.css"
import { Link } from "react-router-dom";
import Fotterpagehome from "../../Fotterpagehome/Fotterpagehome";
import {Context} from "../../../App";
import { useContext } from 'react';
import {Logout}from "../../../Util/Home/Home"
const Homeprofileaccount = () => {
    const [setLogin]=useContext(Context);
  return (
    <>
      <div className='homeprofilecontainer'>
                        <Link to="profile">
                            <img src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-1/276202347_2150814471771966_507197277566496472_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=f0azdKq-UMUAX8GQKde&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfBV8RkEXcHa_3BsmePeKSGzLrVliOHpc8te_FfFIKTWfw&oe=64393D43" alt="" />
                            <div>Nareash Kumar</div>
                        </Link>
                    
                    <div className='homeprofileline'>
                    </div>
                    <div className='homeprofilelink'>See all profiles</div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilesettingiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon"><span>Settings & privacy</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilehelpiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Help & support</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofiledisplayiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Display & accessibility</span>
                        <i></i>
                    </div>
                </div>
                <div className="homeprofilesettingbutton">
                    <div className="homeprofilesettingicon"><i className="homeprofilefeedbackiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Give feedback</span>
                    </div>
                </div>
                <div className="homeprofilesettingbutton" onClick={()=>{Logout(setLogin)}}>
                    <div className="homeprofilesettingicon"><i className="homeprofilelogiconimg homeprofileiconcommon"></i></div>
                    <div className="homeprofilearrowicon">
                        <span>Log Out</span>
                    </div>
                </div>
                <Fotterpagehome/>
    </>
  )
}

export default Homeprofileaccount
