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
    <div className='p-5 bg-gray-800 text-white h-screen '>
      <div className=' mb-5  w-[1000px]  min-h-[200px]  '>

      <h1 className='font-bold text-2xl text-center'>
      {selectedStory.title}
        </h1>
        <p className='p-4'>
          {selectedStory.contents}
        </p>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default Story