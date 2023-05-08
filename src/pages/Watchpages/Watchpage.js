import React from 'react'
import "./Watchpage.css"
import Leftnavigate from '../../components/Leftnavigate/Leftnavigate'
import { useParams } from 'react-router-dom';
const Watchpage = () => {
  const {id}=useParams();
  return (
    <div>
      <Leftnavigate/>
    </div>
  )
}

export default Watchpage
