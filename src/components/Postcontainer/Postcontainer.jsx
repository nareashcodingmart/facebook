import React from 'react'
import "./Postcontainer.css"
import Storycontainer from '../Storycontainer/Storycontainer'
import Postcreate from './Postcreate/Postcreate'
import { useEffect,useState} from 'react'
import { Storylist,Profile } from '../../Util/Getdata/getdata'
import Postcomponent from './Postcomponent/Postcomponent'
const Postcontainer = () => {
  const [story,setStory]=useState(0)
  const [profile,setProfile]=useState(0)
  useEffect(()=>{
    Profile(setProfile);
Storylist(setStory)
  },[])
  return (
    <div className='postcontainer'>
    <Storycontainer storylist={story} profile={profile}/>
       <Postcreate profile={profile}/>
      <Postcomponent/>
    </div>
  )
}

export default Postcontainer
