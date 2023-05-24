import React, { useState } from 'react'
import "./Postdialog.css"
import { Dialog } from '@material-ui/core'
import { observer } from 'mobx-react'
import { store } from "../../../Mobx"
import { Postcreatedata } from '../../../Util/Function/Function'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
const Postdialog = () => {
  const [theme,setTheme]=useState(0);
  const [data, setData] = useState({
    value: "",
  })
  const [valuelength, setValuelength] = useState(0)
  const divref = useRef(null)
  const img=document.getElementById("postcreatedialogwriterarea")

  const fun=async()=>{
   let canvas=await html2canvas(img, {
    useCORS: true,
  })
   let data=canvas.toDataURL("image/png", 1.0);
  downloadImage(data);
}
const downloadImage = (blob) => {
const fakeLink = window.document.createElement("a");
fakeLink.style = "display:none;";
fakeLink.download ="image.png";

fakeLink.href = blob;

document.body.appendChild(fakeLink);
fakeLink.click();
document.body.removeChild(fakeLink);

fakeLink.remove();
}
  return (
    <Dialog open={store.createpostdialog}>
      <div className='postcreatedialog'>
        <div>
          <div className='postcreatedialogtitle postcreatedialogtitlefont'>
            Create post
          </div>
          <div className='postcreatedialogclose'>
            <span Click={() => store.createpostdialog = 0}><i /></span>
          </div>
        </div>
        <div className='postcreatedialogbody1'>
          <img className="clusor" src={store.Profile.profile} alt="" />
          <div className='postcreatedialognamecontent'>
            <h4>{store.Profile.first_name} {store.Profile.last_name}</h4>
            <div className='clusor'>
              <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/AmAoxUvBtdU.png" alt="" />
              <span>Public</span>
              <i />
            </div>
          </div>
        </div>
        <div className='postcreatedialogwriter'>
          <div id='postcreatedialogwriterarea'
          className={valuelength===2?"lengthabove":"lengthbelow"}
            onInput={() => Postcreatedata(data, setData, divref,setValuelength)}
            suppressContentEditableWarning
            contentEditable
            ref={divref}
            role="textbox" 
            spellCheck="true">
            {
              !data.value ?
                (<p>
                  What's on your mind, {store.Profile.first_name}?
                </p>) :""
            }
          </div>

          <div className='postcreatetheme'>
            {theme?
            (<div>
             <div className="themeoff"> <i/></div>

            </div>)
            :(<img  onClick={()=>{setTheme(1)}}className="clusor" src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" />)
            
          }
            <i className='clusor' />
          </div>
          </div>
          <div className='postcreatecontentbelow'>
          <div className='postcreateaddpost'>
            <div className='postcreateaddpostleft'>
              Add to your post
            </div>
            <div className='postcreateaddpostright'>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt="" /></div>
              <div><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png" alt="" /></div>
              <div><i /></div>
            </div>
          </div>
          <div className='postcreatepostsubmit' 
          id={valuelength!==0?"postcreatepostsubmitwork":"postcreatepostsubmitnotwork"}
          onClick={()=>valuelength!==0?fun():""}> Post</div>
        </div>
      </div>
    </Dialog>
  )
}
export default observer(Postdialog)