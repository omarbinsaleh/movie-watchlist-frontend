import React from 'react'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import MovieList from './MovieList/MovieList'

const MovieWatchlist = () => {
  return (
    <div className='w-full min-h-screen flex flex-col border'>
      <Header />

      <Filter />

      <MovieList />
    </div>
  )
}

export default MovieWatchlist
