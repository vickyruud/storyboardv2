import React from 'react'

const NavMenuItem = ({itemName, handleClick}) => {
  return (
    <li className='p-2'>
      <button onClick={handleClick}>
        {itemName}
      </button>
    </li>
  )
}

export default NavMenuItem