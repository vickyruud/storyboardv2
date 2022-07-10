import React, { useContext } from 'react'
import { AppContext } from '../App'
import StoryListItem from './StoryListItem'

const StoryList = () => {

  const {stories, users} = useContext(AppContext)

  const arrayOfStories = stories.map(story => {

    const user = users.find(user => user._id === story.user_id)

    return (
      <StoryListItem key={story._id} story={story} user={user} />
    )
  })

  return (
    <div className='max-w-7xl'>
      {arrayOfStories}
    </div>
  )
}

export default StoryList