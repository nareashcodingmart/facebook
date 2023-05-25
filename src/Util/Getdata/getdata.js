import Apicall from "../../Request/Apicall";
export const Profile=async(store)=>{
      let res= await Apicall("get","","getuser");
      if(res.status===200)
      {
        store.Profile=res.data[0]  
      }
}
export const Contactlist=async(store)=>{
    let res = await Apicall("get", "", "friends/list");
      if (res.status === 201) {
        console.log("hi")
        console.log(res.data.result)
        store.Contactlist=res.data.result
      }
}
export const Storylist=async(setStory)=>{
  let res=await Apicall("get","","story");
  if(res.status===200){
    setStory(res.data.result)
  }
}
export  const Callapi=async(logindata,store)=>{
  let res=await Apicall("post",logindata,"login")
     if(res.status===201){
    localStorage.setItem("token",res.data.message)
    window.location.pathname="/."
    store.Login=1;
     }
    }

export const Findaccountcall=async(data)=>{
  let res=await Apicall("post",data,"login/forgetPassword")
  return(res.data)
  
}
export const Otpverifier=async(data)=>{
  let res=await Apicall("patch",data,"login/forgetPassword")
  return(res.data)
}
export const Newpasswordsubmitapi=async(data,store)=>{
  let res=await Apicall("patch",data,"changePassword")
     return (res.data)
}
export const Creatstory=async(form)=>{
  let res=await Apicall("postheader",form,"home/story")
  window.location.pathname="/."
  return (res.data)
}
export const Creatstorytext=async(form)=>{
  let res=await Apicall("postheadertext",form,"home/storyText")
  window.location.pathname="/."
  return (res.data)
}
export const Friendlistsuggestion=async()=>{
  let res=await Apicall("get","","friends/suggestions")
  // console.log(res.data)
  return res.data
}
export const Removefriendlistsuggestion=async(data)=>{
  // console.log(data)
  let res=await Apicall("patchheader",data,"friends/suggestions")
  console.log(res)
}
export const Addfriendlistsuggestion=async(data)=>{
   let res=await Apicall("postheader",data,"friends/suggestions")
   console.log(res)
}