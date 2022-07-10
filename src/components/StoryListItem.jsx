import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const StoryListItem = ({ story, user }) => {  

  console.log(user)

  return (
<div className="p-4 ">
    <div className=" w-full lg:max-w-full flex flex-row lg:flex border-2 shadow-xl shadow-stone-400 border-gray-400   lg:border-gray-400 ">
         <div className=' pl-4 pr-4 flex flex-col justify-center  items-center '>
          <button className='text-blue-700'><AiOutlineArrowUp /></button>
          <p className=''>4</p>
          <button className='text-red-600'><AiOutlineArrowDown/></button>
        </div>
      <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">        
          <div className="text-purple-900 font-bold text-xl mb-2">{story.title}</div>
            <p className="text-gray-700 text-base">{story.contents}</p>
        </div>
        <div className="flex items-center">
          
          <div className="text-sm">
            <p className="text-gray-900 leading-none font-bold capitalize">{user.username}</p>
            <p className="text-gray-600font-semibold">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StoryListItem;
