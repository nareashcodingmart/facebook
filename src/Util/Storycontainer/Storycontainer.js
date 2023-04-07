import { Story,Reellist} from "../../Assert/List/List"
import {Link} from "react-router-dom"
export const Storysetlist = () => {
    let arr = [];
    for (let i = 0; i <Story.length; i++) {
        arr.push(<Link to="" className="storysetview">
            <img className="storyviewbackgroungimg"src={Story[i].backgroundimg} alt="" />
            <div className="storysetviewouter"><img className="storyviewdpimg"id={Story[i].storyview?"storycontaineractive":""} src={Story[i].dpimg} alt="" />
            <div>{Story[i].name}</div>
            </div>
        </Link>)
    }
    return arr;
}
export const Reels=()=>{
    let arr=[];
for(let i=0;i<Reellist.length;i++){
    arr.push(<Link to="" className="storysetview">
        <img className="storyviewbackgroungimg" src={Reellist[i].img} alt=""/>
        <div className="storyviewinreels">{Reellist[i].views}</div>
    </Link>)
}
return arr
}