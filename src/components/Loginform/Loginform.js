import React,{useState} from 'react';
import "./Loginform.css";
import { Link} from 'react-router-dom';
import Inbutbox from "../Inputbox/Inbutbox"
import Apicall from "../../Request/Apicall"
// import dialogbox from '../../Util/dialogbox';
const Loginform = (props) => {
 
  const [logindata,setLogindata]=useState({
    email:"",
    password:""
  })
  const valueupdate=(e)=>{
    let obj={...logindata};
    obj[e.target.name]=e.target.value;
    setLogindata(obj);
  }
  const callapi=async()=>{
    let res=await Apicall("post",logindata,"login")
       if(res.status===201){
      localStorage.setItem("token",res.data.message)
      props.changedisplay();
       }
      }

  
  return (
    <div className='loginpage-right'>
    <Inbutbox placeholder="Email address or phone number" className={"login-id"} type={"text"} focus="1" onchange={valueupdate} name="email" value={logindata.email} />
    <Inbutbox placeholder="Password" className="login-id" type="password"onchange={valueupdate} name="password" value={logindata.password}/>
    <Inbutbox className="login-button" type="button" value="Log in" onclick={callapi}/>
    <div className='forgot-container'>
      <Link to=""> Forgotten password?</Link>
    </div>
    <div className='login-line'></div>
     <div  className='create-button'>
     <button onClick={props.dialogbox}>Create new account </button>
     </div>
   </div>
 
  )
}

export default Loginform
