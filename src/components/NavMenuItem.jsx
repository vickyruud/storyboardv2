import React from 'react'

const NavMenuItem = ({itemName, handleClick}) => {
  return (
    <li>
      <button onClick={handleClick}>
        {itemName}
      </button>
    </li>
  )
}

export default NavMenuItem