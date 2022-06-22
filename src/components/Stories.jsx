import React, { useContext } from 'react'
import { AppContext } from '../App'

const Stories = () => {

  const { stories } = useContext(AppContext);


  

  return (
    <div>Stories</div>
  )
}

export default Stories