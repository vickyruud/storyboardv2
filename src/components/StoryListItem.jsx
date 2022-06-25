import React from 'react'

const StoryListItem = ({ story }) => {
  
  console.log(story);

  return (
    <div className='bg-[#798087]'>
      {/* container */}
      <div className='border-4'>
        {story.contents}
      </div>

    </div>
  )
}

export default StoryListItem