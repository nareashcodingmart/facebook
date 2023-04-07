import { Story } from "../../Assert/List/List"
import {Link} from "react-router-dom"
export const Storysetlist = () => {
    let arr = [];
    for (let i = 0; i <Story.length; i++) {
        arr.push(<Link to="" className="storysetview">
            <img className="storyviewbackgroungimg"src={Story[i].backgroundimg} alt="" />
            <div className="storysetviewouter"><img className="storyviewdpimg"id={Story[i].storyview?"storycontaineractive":""} src={Story[i].dpimg} alt="" />
            <span>{Story[i].name}</span>
            </div>
        </Link>)
    }
    // console.log("hiiiu"+arr)
    return arr;
}