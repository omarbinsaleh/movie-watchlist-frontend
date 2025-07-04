import React from 'react'
import ListItem from './ListItem'

const MovieList = () => {
  return (
    <div className='flex-1'>
      <section className='w-full h-full max-w-6xl mx-auto p-3 px-0'>
         <ul className='space-y-3'>
          {Array(25).fill(2).map((item, index) => <ListItem key={index} value={index + 1} />)}
         </ul>
      </section>
    </div>
  )
}

export default MovieList
