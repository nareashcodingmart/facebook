import { Findaccountcall,Otpverifier} from "../../Util/Getdata/getdata"
import { store } from "../../Mobx"
export const Findaccountvaluechecker = async (data, setData, state, setState) => {
    let obj = { ...state }
    if (data.findaccount.length === 0) {
        obj.view = 1;
        obj.title = " Please fill in at least one field";
        obj.message = "Fill in at least one field to search for your account";

    }
    else {
        let res = await Findaccountcall(data);
        if (res.message === "NOT") {
            setData({ findaccount: "" })
            obj.view = 1;
            obj.title = "No search results";
            obj.message = "Your search did not return any results. Please try again with other information."
        }
        else {
            store.Findaccount = res.mail
            obj.status = 1
        }
    }
    setState(obj)
    return
}

export const Valueupdate =(e, data, setData) => {
    let obj = { ...data };
    obj[e.target.name] = e.target.value;
    setData(obj);
}
export const Otpverfication=async(otp,setOtp,otpwarning,setOtpwarning)=>{
    let obj={...setOtpwarning}
    let obj2={...otp};
    obj.view=1;
    if(otp.otpcode.length===0){
        obj.message="Please enter a code."
    }
    else if(!(Number.isInteger(Number(otp.otpcode)))){
        obj.message="It looks like you entered some letters. Your code is 6 numbers long."
    }
    else if(otp.otpcode.length===1){
        obj.message="You only entered one number. Please check your code and try again."
    }
    else if(otp.otpcode.length<6){
        obj.message=`You've only entered ${otp.otpcode.length} numbers. Please check your code and try again.`
    }
    else if(otp.otpcode.length>6){
        obj.message="You've entered more than six numbers. Please check your code and try again."
    }
    else{
       
        let res=await Otpverifier(otp)
        if(res.message==="NO"){
            obj.message="The number that you've entered doesn't match your code. Please try again."
        }
        else{
            obj.view=0;
            obj.status=1;
        }
    }
    obj2.otpcode="";
    setOtp(obj2)
setOtpwarning(obj)
}
export const Regex=()=>{
    
}