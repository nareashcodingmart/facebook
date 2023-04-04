
import { Link } from "react-router-dom";
import { Homeleftnavlist,Homeleftnavfooter } from "../../Assert/Homeleftnav/Homeleftnav"
export const Leftnavlist = (i,n) => {
    let arr = [];
    for (; i < n; i++) {
            arr.push(<Link to={Homeleftnavlist[i].link} key={i}><div><img src={Homeleftnavlist[i].img} alt=""/> <span>{Homeleftnavlist[i].name}</span></div></Link>);
    }
    return arr;
}
export const Footerlist=()=>{
    let arr=[];
    for(let i=0;i<Homeleftnavfooter.length;i++){
        arr.push(<li key={i}><Link to={Homeleftnavfooter[i].link}>{Homeleftnavfooter[i].name} </Link><span>.</span></li> )
    }
    return arr;
}
