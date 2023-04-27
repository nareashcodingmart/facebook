import React, { useState } from 'react'
import "./Reaction.css"
import { Reactionarr,Likefun} from "../../Util/Home/Home";
import { Reactionlist } from "../../Assert/List/List"
const Reaction = ({reactionview,setReactionview}) => {
    const [reaction, setReaction] = useState(0)
    
    return (
        <>
            <div className='postcontentreaction'>
                <div
                    className='likebutton'
                    id={reactionview.color}
                    onMouseEnter={() => { setReaction(1) }}
                    onMouseLeave={() => { setReaction(0) }}
                    onClick={()=>{Likefun(reactionview,setReactionview)}}
                >

                    {
                        reactionview.value === 0 && <i className='unlikeicon posticon' />
                    }
                    {
                        reactionview.value === "Like" && <i className='likeicon posticon' />
                    }
                    {
                        reactionview.value !== 0 && reactionview.value !== "Like" && <img src={reactionview.img} alt="" className='imgicon' />
                    }
                    {reactionview.name}</div>
                <div className='commentbutton' id="gray"><i className='posticon' />Comment</div>
                <div className='sharebutton' id="gray"><i className='posticon' />Share</div>

            </div>

            {
                reaction ?
                    <div
                        className='postreaction'
                        onMouseEnter={() => { setReaction(1) }}
                        onMouseLeave={() => { setReaction(0) }}
                    >
                        {
                            Reactionarr(Reactionlist, setReactionview)
                        }
                    </div> : <></>
            }
        </>
    )
}

export default Reaction
