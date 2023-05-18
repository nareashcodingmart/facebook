import React from 'react'
import "./Create.css"
import { store } from "../../../../Mobx"
import { observer } from 'mobx-react'
import { useEffect } from 'react'
import { Photocreatestoryfun } from '../../../../Util/Function/Function'
const Create = () => {
  useEffect(() => {
    store.createstorymessageicon = 0;
    return () => {
      store.createstorymessageicon = 1
    }
  }, [])
  document.title = "Create Stories | Facebook"

  return (
    <div className='storycreatepage displayflex'>
      <div className='storycreatepageleftnavi'>
        <div className='leftnavigate '>
          <div className='storycreatepageleftnaviheader displayflex'>
            <div>
              Your story
            </div>
            <div className='storycreatenaviheadersettingicon displayflexcenter clusor'>
              <i />
            </div>

          </div>
          <div className='storycreatenaviprofile displayflexalign'>
            <img src={store.Profile.profile} alt="" />
            <div>{store.Profile.first_name} {store.Profile.last_name}</div>
          </div>
        </div>
      </div>
      <div className='storycreatepagebody displayflexcenter'>
  
        <div onClick={Photocreatestoryfun} className='photostorycreatepagebody storycreatepagebodycontent clusor displayflexcenter'>
          <div className='storycreatepagebodycontent1 displayflexcenter'>
            <div className='createstoryphotoicon displayflexcenter'>
              <i />
            </div>
            <h5>Create a photo story</h5>
          </div>
        </div>

        <div className='textstorycreatepagebody storycreatepagebodycontent clusor displayflexcenter'>
          <div className='storycreatepagebodycontent1 displayflexcenter'>
            <div className='createstorytexticon displayflexcenter'>
              <i />
            </div>
            <h5>Create a text story</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(Create)
