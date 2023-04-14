import React from 'react'
import "./Storyset.css"
import {Link} from "react-router-dom"
import {Storysetlist} from "../../../Util/Storycontainer/Storycontainer"
const Storyset = (props) => {
  return (
    <div className='storycontainerset'>
      <Link to="" className='storycontainercreatestory'>
      <img src={props.profile!==0?props.profile.profile:null}alt=""/>
        <span><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><g fillRule="evenodd" transform="translate(-446 -350)"><g fillRule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg></span>
        <div className='storycontainercreatestoryline'>Create story</div>
      </Link>
      {
       Storysetlist(props.storylist)
      }
    </div>
  )
}

export default Storyset
