import React from 'react'
import "./Textstory.css"
import { useState } from 'react'
import { store } from "../../../../../Mobx"
import { observer } from 'mobx-react'
 export  const Textstorybody = observer(() => {
  return (
    <div className='textstorybody'>
      <div><h3>
        Preview
      </h3>
      </div>
      <div className='textstorybodycontent displayflexcenter'>
        <div className='textstorybodycontent2 displayflexcenter'>
            <div className='dispalyflexcenter'>
                {
                    !store.textstorycontent.length?<span className='textstorybodycontent2span'>Start typing</span>:store.textstorycontent
                }
            </div>
        </div>
      </div>
    </div>
  )
}
 )

export const Textstorynavi=observer(()=>{
    const [inputfiledfocus,setInputfiledfocus]=useState(0)
    const [ inputfiledletter,setInputfiledletter]=useState(1)
return(
    <div className='textstorynavi'>
        <div className={`textstorynaviinputcontainerselect ${inputfiledfocus?"textstorynaviinputcontainerselected":""}`}>
            <div className='textstorynaviinputcontainerselect1'
            onClick={()=>setInputfiledfocus(1)}
            >
          {(inputfiledletter || inputfiledfocus)?( <> <div className={inputfiledfocus?"textstorynaviinputcontainerselected":""}>Text</div>
            <textarea autoFocus={1}  
            row="7" placeholder='Start typing' 
            className="textstorynaviinputfield"
            onChange={(e)=>store.textstorycontent=e.target.value}
            onFocus={()=>setInputfiledfocus(1)}
            onBlur={()=>{setInputfiledfocus(0);setInputfiledletter(store.textstorycontent.length)}}
            ></textarea>
            </>)
            :( <span className='textstoryplaceholder'>Start typing</span> )
}
            </div>
        </div>
    </div>
)
})