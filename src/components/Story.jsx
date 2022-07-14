import React from 'react'
import { Link, useParams } from 'react-router-dom'

 
const Story = () => {
  let params = useParams();

  const getStory = (id) => {
    return JSON.parse(localStorage.getItem('stories')).find(story => {
      return story._id === id;
    })
  }

  const selectedStory = getStory(params.id);




  return (
    <div className='text-3xl'>
      <p>
      {selectedStory.title}
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Story