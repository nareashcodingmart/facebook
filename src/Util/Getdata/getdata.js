import Apicall from "../../Request/Apicall";
export const Profile=async(setProfile)=>{
      let res= await Apicall("get","","getuser");
      if(res.status===200)
      {
          setProfile(res.data[0])   
      }
}
export const Contactlist=async(setList)=>{
    let res = await Apicall("get", "", "friends/suggestions");
      if (res.status === 201) {
        setList(res.data)
      }
}
export const Storylist=async(setStory)=>{
  let res=await Apicall("get","","story");
  if(res.status===200){
    console.log(res.data.result)
    setStory(res.data.result)
  }
}