
import axios from "axios";
const Apicall = async(method,data,link) => {
  let res;
  console.log(process.env.REACT_APP_API_KEY)
  switch(method){
    case "post": {res=await axios.post(`${process.env.REACT_APP_API_KEY}${link}`,data);
    break;}
    case "get":{
      console.log("get")
      res=await axios.get(`${process.env.REACT_APP_API_KEY}${link}`,{headers :{ "authorization": `Bearer ${localStorage.getItem("token")}`}});
         console.log(res)   
      break;}
    default:
  }
    return res;
}

export default Apicall