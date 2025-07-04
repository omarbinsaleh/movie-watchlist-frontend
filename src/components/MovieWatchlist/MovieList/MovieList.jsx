import React from 'react'
import ListItem from './ListItem'

const MovieList = ({movies, onWatched, onUnwatched, onDelete, onRatingChange}) => {
  return (
    <div className='flex-1'>
      <section className='w-full h-full max-w-5xl mx-auto p-3 px-0'>
         <ul className='space-y-3'>
          {movies.map((movie, index) => <ListItem key={movie.id} data={movie} onWatched={onWatched} onUnwatched={onUnwatched} onDelete={onDelete} onRatingChange={onRatingChange} />)}
         </ul>
      </section>
    </div>
  )
}

export default MovieList
