import React, { useState } from 'react'
import { addMovieToLocalStorage, deleteAllMoviesFromLocalStorage, deleteMovieFromLocalStorage } from '../../../utilities/MovieWatchlist/utilities';

const AddMovieForm = ({addMovie}) => {

   const [formData, setFormData] = useState({
      movie: "",
      ott: "",

   })

   const handleChange = (e) => {
      // step 1: determine which information is being provided
      const key = e.target.name;

      // step 2: extract the value of the information from the from
      const value = e.target.value;

      // step 3: update the form data state value with the new information
      setFormData({ ...formData, [key]: value });
   }

   const handleSubmit = (e) => {
      // step 1: prevent the default form submition behaviour
      e.preventDefault();

      // step 2: Check user input and validate
      if (!formData.movie || !formData.ott) return

      // step 3: create a movie log
      const movie = {
         id: crypto.randomUUID(),
         movieName: formData.movie,
         ott: formData.ott,
         rating: null,
         isWatched: false
      };
      
      // step 4: save the movie in the local storage and update the UI
      addMovie(movie);

      // step 4: reset the form
      setFormData({ movie: "", ott: "" })
   }

   return (
      <div className='w-full p-4 max-w-6xl mx-auto'>
         <form onSubmit={handleSubmit} className='w-full flex items-center justify-center  gap-4 flex-wrap' >
            <input className='flex-1 max-w-md  py-2 px-3 bg-white text-black placeholder:text-gray-500 rounded-md' type="text" name="movie" id="movie-name-input" value={formData.movie} onChange={handleChange} placeholder='Enter movie name' />

            <select className=' py-2 cursor-pointer bg-white text-black rounded-md px-1' name="ott" id="ott" value={formData.ott} onChange={handleChange} >
               <option className='text-black' value="">OTT</option>
               <option className='text-black' value="amazon">Amazon</option>
               <option className='text-black' value="netflix">Netflix</option>
               <option className='text-black' value="hotstar">Hotstar</option>
               <option className='text-black' value="disney+">Disney+</option>
               <option className='text-black' value="sonyliv">SonyLIV</option>
            </select>

            <input className='py-2 px-5 bg-blue-600 rounded-md cursor-pointer active:scale-105 flex-1 sm:max-w-[80px]' type="submit" value="Add" />
         </form>
      </div>
   )
}

export default AddMovieForm
