import React, { useContext } from 'react'
import { AppContext } from '../App'
import StoryListItem from './StoryListItem'

const StoryList = () => {

  const {stories} = useContext(AppContext)

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