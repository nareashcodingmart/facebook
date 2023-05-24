import React from 'react'
import "./Homefriend.css"
import {Link} from "react-router-dom"
import Homeleftnavigated from "../../Homefriendsleftnavigated/Homefriendsleftnavigated"
import Friendlistcomponent from './Friendlistcomponent/Friendlistcomponent'
const Homefriend = () => {
  return (
    <div className='displayflex'>
    <div className='friendshomeleftnavigate'>
      <Homeleftnavigated/>
     </div>
     <div className='friendpagebody'>
      <div className='friendpagebodyheader displayflexalign'>
        <span>People You May Know</span>
        <Link to="/suggestion">See all</Link>
      </div>
      <div className='friendpagebodycontent displayflex'>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
          <Friendlistcomponent/>
      </div>
     </div>
     </div>
  )
}

export default Homefriend
