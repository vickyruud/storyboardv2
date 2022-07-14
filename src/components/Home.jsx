import React from 'react'
import { AppContext } from "../App";
import { useContext } from "react";
import Story from './Story';

const Home = () => {

  const { loggedUser } = useContext(AppContext);

  return (
    <div className="max-w-lg rounded overflow-hidden">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">StoryBoard - Collaborate Creatively</div>
    <p className="text-gray-700 text-base">
      {loggedUser ? <a className='bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded' href="/stories">View Stories</a> : <p>Please login or register to view stories</p> }
    </p>
 </div>
      
</div>
  )
}

export default Home