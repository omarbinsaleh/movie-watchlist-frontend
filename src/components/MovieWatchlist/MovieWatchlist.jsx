import React, { useState } from 'react'
import Header from './Header/Header'
import Filter from './Filter/Filter'
import MovieList from './MovieList/MovieList'
import AddMovieForm from './AddMovieForm/AddMovieForm'
import { addMovieToLocalStorage, deleteMovieFromLocalStorage, getAllMoviesFromLocalStorage, updateTheMovieList } from '../../utilities/MovieWatchlist/utilities'
import HomeBtn from './HomeBtn/HomeBtn'
import Divider from '../Divider/Divider'

const MovieWatchlist = () => {
  const [movies, setMovies] = useState(getAllMoviesFromLocalStorage());

  console.log('moviesList', movies);

  // ADD NEW MOVIE
  const addMovie = (movie) => {
    // check if the movie object is provided or not
    if (!movie) return console.error("addMovie method expects a movie object as parameter");

    // create a new movie and update the state
    const newMovies = [movie, ...movies];
    setMovies(newMovies);

    // save the movie in the local storage
    addMovieToLocalStorage(movie);
  }

  // DELETE A MOVIE
  const deleteMovie = (movieId) => {
    const newMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(newMovies);

    deleteMovieFromLocalStorage(movieId);
  }

  // MARK A MOVIE AS WATCHED ALREADY
  const handleWatched = (movieId) => {
    // check if the movie object exists with the same movie ID in question
    const movie = movies.find(movie => movie.id === movieId);
    if (!movie) return console.error(`Movie with this ID-${movieId} was not found. Try again please.`);

    // create a new movies list
    const newMovies = movies.map(movie => {
      if (movie.id === movieId) {
        return { ...movie, isWatched: true }
      } else {
        return movie;
      }
    })

    // update the UI and save new new movies list in the local storage
    setMovies(newMovies);
    updateTheMovieList(newMovies) // update the movies in the local storage
  }

  // MAKR A MOVIE AS UNWATCHED
  const handleUnwatched = (movieId) => {
    // check if the movie object exists with the same movie ID in question
    const movie = movies.find(movie => movie.id === movieId);
    if (!movie) return console.error(`Movie with this ID-${movieId} was not found. Please try again later.`);

    // create a new movies list
    const newMovies = movies.map(movie => {
      if (movie.id === movieId) {
        return { ...movie, isWatched: false };
      } else {
        return movie;
      }
    });

    // update the UI and save the new movies list in the local storage
    setMovies(newMovies);
    updateTheMovieList(newMovies);
  }

  // DELETE A MOVIE
  const handleDelete = (movieId) => {
    // delete the movie and create a new list of movies to save
    const newMovies = movies.filter(movie => movie.id !== movieId);

    // update the UI and save the new movies list in the local storage
    setMovies(newMovies);
    updateTheMovieList(newMovies);
  }

  // HANDLE THE RATING CHANGE
  const handleRatingChange = (movieId, ratingValue) => {
    if (ratingValue < 0 || ratingValue > 5) return;

    const newMovies = movies.map(movie => {
      if (movie.id === movieId) {
        return { ...movie, rating: ratingValue };
      } else {
        return movie;
      }
    });

    // update the UI and save the new movies list in the local storage
    setMovies(newMovies);
    updateTheMovieList(newMovies);
  }


  return (
    <div className='w-full min-h-screen flex flex-col'>
      <section className='py-1.5 w-full '>
        <div className='px-3 py-3 max-w-5xl mx-auto'>
          <HomeBtn />
        </div>

        <Divider />

        <Header />
      </section>

      <section className=' w-full py-1.5'>
        <AddMovieForm addMovie={addMovie} />
      </section>

      <Divider />

      <section className='sticky top-0 left-0 bg-gray-800 py-1.5 z-10 '>
        <Filter />
        <Divider />
      </section>

      <section className='py-1.5'>
        <MovieList movies={movies} onWatched={handleWatched} onUnwatched={handleUnwatched} onDelete={handleDelete} onRatingChange={handleRatingChange} />
      </section>
    </div>
  )
}

export default MovieWatchlist
