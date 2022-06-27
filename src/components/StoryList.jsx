import React from 'react'
import StoryListItem from './StoryListItem'

const StoryList = ({ stories }) => {

  const arrayOfStories = stories.map(story => {
    return (
      <StoryListItem key={story._id} story={story} />
    )
  })

  return (
    <div className='max-w-7xl'>
      {arrayOfStories}
    </div>
  )
}

export default StoryList