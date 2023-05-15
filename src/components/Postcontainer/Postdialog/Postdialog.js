import React from 'react'
import "./Postdialog.css"
import { Dialog } from '@material-ui/core'
const Postdialog = (props) => {
  return (
    <Dialog open={props.open}>
        <div className='postcreatedialog'>
          <div>
            <div className='postcreatedialogtitle'>
              Create Post
            </div>
            <div className='postcreatedialogclose'>
              <i/>
            </div>
          </div>
        </div>
    </Dialog>
  )
}
export default Postdialog