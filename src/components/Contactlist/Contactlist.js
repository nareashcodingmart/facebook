import React from 'react'
import "./Contactlist.css"
import { HomeContactlist } from '../../Util/Contactlist/Contactlist'
const Contactlist =({list}) => {

  return (
    <div>
      {
        HomeContactlist(list)
      }
    </div>
  )
}

export default Contactlist
