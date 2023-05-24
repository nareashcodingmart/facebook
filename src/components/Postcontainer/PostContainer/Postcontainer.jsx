import React from 'react'
import "./Postcontainer.css"
import Storycontainer from '../../Storycontainer/Storycontainer'
import Postcreate from '../Postcreate/Postcreate'
import { useEffect, useState } from 'react'
import { Storylist} from '../../../Util/Getdata/getdata'
import { Postarr } from '../../../Util/Home/Home'
import InfiniteScroll from 'react-infinite-scroll-component'
import Postcomponent from '../../Postcomponent/Postcomponent'
// import Pop from '../../opo/Pop'
import MouseOverPopover from "../../opo/Pop"
const Postcontainer = () => {
  const [postarr, setPostarr] = useState({
    arr: [],
    hasMore: true
  })
  const [story, setStory] = useState(0)
  useEffect(() => {
    Storylist(setStory)
  }, [])
  return (

    <InfiniteScroll
      dataLength={postarr.arr.length}
      next={() => { Postarr(postarr, setPostarr) }}
      hasMore={postarr.hasMore}
      endMessage={<h4>not found</h4>}
    >
      <div className='postcontainer'>
        <Storycontainer storylist={story} />
        <Postcreate/>
        <div><MouseOverPopover/></div>
        {postarr.arr.map((i) => (
          <Postcomponent key={i} />
        ))
        }
      </div>
    </InfiniteScroll>
  )
}

export default Postcontainer
