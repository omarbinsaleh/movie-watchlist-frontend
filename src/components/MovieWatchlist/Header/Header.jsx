import React from 'react'
import { BiSolidCameraMovie } from 'react-icons/bi'

const Header = () => {
  return (
    <div className=' p-3'>
      <h1 className='flex justify-center gap-4 items-center font-bold text-4xl text-center'> <BiSolidCameraMovie /> Movie Watchlist</h1>
    </div>
  )
}

export default Header
