import React from 'react'
import "./Storyset.css"
import {Link} from "react-router-dom"
import {Storysetlist} from "../../../Util/Storycontainer/Storycontainer"
const Storyset = () => {
  return (
    <div className='storycontainerset'>
      <Link to="" className='storycontainercreatestory'>
        <img src='https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-1/276202347_2150814471771966_507197277566496472_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FUUxn0bbKywAX_fYQxd&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfChCl0lfhUBTE3XUsA8TqLO5WUTXRCvUbzzS-4SntAlTA&oe=64334E83' alt=""/>
        <span><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"><g fillRule="evenodd" transform="translate(-446 -350)"><g fillRule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg></span>
        <div className='storycontainercreatestoryline'>Create story</div>
      </Link>
      {
       Storysetlist()
      }
    </div>
  )
}

export default Storyset
