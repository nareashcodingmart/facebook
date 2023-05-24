import React from 'react'
import "./Friendlistcomponent.css"
import { Link } from 'react-router-dom'
const Friendlistcomponent = () => {
  return (
    <div className='friendlistcomponent'>
      <div className='friendlistbody'>
      <Link to=""><img src="https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-1/344740791_176139768348865_5324464794868303047_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=SWr0DDyq4yMAX8-x0RV&_nc_ht=scontent.fmaa2-2.fna&oh=00_AfCJalElXnO3RTGmHisgG3j8Mm7k8fGucdUYSzrFJ2MpqQ&oe=64732D7D" alt=""/></Link>
      </div>
    </div>
  )
}

export default Friendlistcomponent
