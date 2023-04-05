import React from 'react'
import Homeleftnav from '../../components/Homeleftnav/Homeleftnav'
import "./Homecontent.css"
import Homecontact from '../../components/Homecontact/Homecontact'
const Homecontent = () => {

  return (
    <div className='homecontent'>
      <div className='homeleftnav-outer'>
        <Homeleftnav />
      </div>
      <div>
        poster
      </div>
     <div>
        <Homecontact/>
        </div>

    </div>
  )
}

export default Homecontent
