import React from 'react'

const Filter = () => {
  return (
    <div>
      <section className='flex items-center justify-center gap-2 my-3 '>
         <button className=' min-w-[48px] p-2 rounded-md bg-gray-500 text-white hover:bg-gray-400/75 cursor-pointer active:scale-105  '>All</button>
         <button className='p-2 bg-green-600 text-white hover:bg-green-500 rounded-md cursor-pointer active:scale-105'>Watched</button>
         <button className='p-2 bg-orange-800 text-white hover:bg-orange-700 active:scale-105 rounded-md cursor-pointer'>Unwatched</button>
      </section>
    </div>
  )
}

export default Filter
