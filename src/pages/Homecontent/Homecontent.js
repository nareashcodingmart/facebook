import React from 'react'
import Homeleftnav from '../../components/Homeleftnav/Homeleftnav'
import "./Homecontent.css"
import Homecontact from '../../components/Homecontact/Homecontact'
import { useState, useEffect } from 'react'
import { Contactlist, Profile } from '../../Util/Getdata/getdata'
import Postcontainer from '../../components/Postcontainer/Postcontainer'
const Homecontent = () => {
  const [data, setData] = useState(0)
  const [profile, setProfile] = useState(0);
  useEffect(() => {
    Profile(setProfile);
    Contactlist(setData);
  }, [])
  return (
    <div className='homecontent'>

      <div className='homeleftnav-outer'>
        {profile !== 0 ? <Homeleftnav profile={profile} /> : <></>}
      </div>
      <div>
        <Postcontainer/>
      </div>
      <div className='homecontactlist'>
        <Homecontact contactlist={data} />
      </div>

    </div>
  )
}

export default Homecontent
