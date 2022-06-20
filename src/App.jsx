import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {

  const fetchStories = () => {
    return axios.get('/stories')
      .then(res => {
        console.log(res.data);
    })

  }

  const saveStory = (story) => {
    const newStory = {
        "title": "Stranger Things 3 ",
        "contents": "In the summer of 1985 in Hawkins, the newly opened Starcourt Mall has become the focal point of the town, driving other stores out of business. Hawkins chief of police Jim Hopper disapproves of Eleven and Mike's budding relationship, while Joyce considers moving out of Hawkins for a better life for her children and herself, leaving the state of the children's friendships and her own relationship with Hopper in the air. Joyce notices something strange going on with her magnets and decides to investigate. However, strange power fluctuations trigger Will's awareness of something otherworldly, and Eleven and Max sense something is off about the town's residents. Despite having closed the portal to the Upside Down, they fear that they are all still in danger from it. The friends work together to help Max's brother Billy while Hopper and Joyce have their own adventure.",
        "status": "In Progress",
        "user_id": "62af647e0d5f310d1a0abf79",
    }
    return axios.post('/stories', newStory)
      .then(res => {
        console.log(res.data);
    })
  }

  useEffect(() => {
    fetchStories();
  }, [])


  return (
    <div className='text-3xl font-bold underline'>Storyboard - Upgraded
    </div>
  )
}

export default App