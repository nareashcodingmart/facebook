import React from 'react'
import "./Postcontainer.css"
import Storycontainer from '../Storycontainer/Storycontainer'
import Postcreate from './Postcreate/Postcreate'
const Postcontainer = () => {
  return (
    <div className='postcontainer'>
       <Storycontainer/>
       <Postcreate/>
      
    </div>
  )
}

export default Postcontainer
