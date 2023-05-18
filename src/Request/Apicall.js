import axios from "axios";
const Apicall = async (method, data, link) => {
  let res;
  switch (method) {
    case "post":
      {
        res = await axios.post(`${process.env.REACT_APP_API_KEY}${link}`, data);
        break;
      }
    case "get":
      {
        res = await axios.get(`${process.env.REACT_APP_API_KEY}${link}`, { headers: { "authorization": `Bearer ${localStorage.getItem("token")}` } });
        break;
      }
      case "patch":
        {
          res=await axios.patch(`${process.env.REACT_APP_API_KEY}${link}`, data);
          break;
        }
        case "postheader":
          {
            res=await axios.post(`${process.env.REACT_APP_API_KEY}${link}`,data, { headers: { "authorization": `Bearer ${localStorage.getItem("token")}` } })
          break;
          }
    default:
  }
  return res;
}

export default Apicall