import React, { useState } from 'react'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import MovieList from './MovieList/MovieList'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import { addMovieToLocalStorage, deleteMovieFromLocalStorage, getAllMoviesFromLocalStorage } from '../../utilities/MovieWatchlist/utilities'

const MovieWatchlist = () => {
  const [movies, setMovies] = useState(getAllMoviesFromLocalStorage());

  console.log('moviesList', movies);

  const addMovie = (movie) => {
    if (!movie) return console.error("addMovie method expects a movie object as parameter");

    const newMovies = [...movies, movie];
    setMovies(newMovies);

    addMovieToLocalStorage(movie);
  }

  const deleteMovie = (movieId) => {
    const newMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(newMovies);

    deleteMovieFromLocalStorage(movieId);
  }


  return (
    <div className='w-full min-h-screen flex flex-col border'>
      <section className='py-1.5'>
        <Header />
      </section>

      <section className='border-b border-gray-500 py-1.5'>
        <AddMovieForm />
      </section>

      <section className='sticky top-0 left-0 bg-gray-800 border-b border-gray-500 py-1.5'>
        <Filter />
      </section>

      <section className='py-1.5'>
        <MovieList />
      </section>
    </div>
  )
}

export default MovieWatchlist
