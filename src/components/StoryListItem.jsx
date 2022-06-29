import React from 'react';
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { IconName } from "react-icons/fi";

const StoryListItem = ({ story }) => {
  

  return (
    <div className='m-4'>
      {/* container */}
      <div className='border-2 border-red-800 flex flex-row p-4 items-center shadow-lg w-full'>
        <div className='pr-4 flex flex-col justify-between items-center'>
          <AiOutlineArrowUp />
          <p className=''>4</p>
          <AiOutlineArrowDown/>
        </div>
        <div className='pl-2 flex flex-col justify-center w-full '>
          <h1 className='text-2xl pb-2'>
          {story.title}
            
        </h1>
          <p className='border-4 border-gray-500 p-4 w-full'>
          {story.contents}            
        </p>
        </div>
      </div>

    </div>
  )
}

export default StoryListItem;
