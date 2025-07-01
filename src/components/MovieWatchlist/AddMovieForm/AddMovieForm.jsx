import React, { useState } from 'react'

const AddMovieForm = () => {

   const [formData, setFormData] = useState({
      movie:"",
      ott: "",

   })

   const handleChange = (e) => {
      // step 1: determine which information is being provided
      const key = e.target.name;

      // step 2: extract the value of the information from the from
      const value = e.target.value;

      // step 3: update the form data state value with the new information
      setFormData({...formData, [key]: value});
   }

   const handleSubmit = (e) => {
      // step 1: prevent the default form submition behaviour
      e.preventDefault();

      // step 2: log the form data information
      console.log(formData);

      // step 3: reset the form
      setFormData({movie: "", ott: ""})
   }

  return (
    <div className='w-full p-4 max-w-6xl mx-auto'> 
      <form onSubmit={handleSubmit} className='w-full flex items-center justify-center  gap-4' >
         <input className='flex-1 max-w-md  py-2 px-3 border rounded-sm' type="text" name="movie" id="movie-name-input" value={formData.movie} onChange={handleChange} placeholder='Enter movie name' />
         <select className='py-2 px-3 border rounded-sm cursor-pointer ' name="ott" id="ott" value={formData.ott} onChange={handleChange} >
            <option className='text-black' value="">Select OTT Platform</option>
            <option className='text-black' value="amazon">Amazon</option>
            <option className='text-black' value="netflix">Netflix</option>
            <option className='text-black' value="hotstar">Hotstar</option>
            <option className='text-black' value="disney+">Disney+</option>
            <option className='text-black' value="sonyliv">SonyLIV</option>
         </select>
         <input className='py-2 px-5 bg-blue-600 rounded-sm cursor-pointer active:scale-105' type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddMovieForm
