import React from 'react'
import "./Story.css"
import { useParams } from 'react-router-dom';
import Create from "../../components/Story/pages/Create/Create"
const Story = () => {
  const { id } = useParams();
  return (
    <div>
      story
      {
        id==="create" && <Create/>
      }
    </div>
  )
}

export default Story
