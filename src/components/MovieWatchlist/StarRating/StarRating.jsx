import { Rating, ThinStar } from '@smastrom/react-rating'
import React, { useState } from 'react'
import '@smastrom/react-rating/style.css'

const StarRating = ({ value = 0, movieId, onRatingChange }) => {
   const [rating, setRating] = useState(value)
   const starsText = ['Very Poor', 'Below Average', 'Average', 'Above Average', 'Excelent']
   const myStyle = {
      itemShapes: ThinStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: 'white',
   }

   const handleChange = (selectedValue) => {
      onRatingChange(movieId, selectedValue);
      setRating(selectedValue);
   }

   return (
      <div className='text-center'>
         <Rating
            style={{ maxWidth: 110 }}
            value={rating}
            onChange={handleChange}
            isRequired
            itemStyles={myStyle}
            className='z-0'
         />
         <p className='text-sm hidden sm:block'>{starsText[rating < 0 ? 0 :(rating - 1)]}</p>
         {!rating && <p className='text-sm hidden sm:block'>Not Rated Yet</p>}
      </div>
   )
}

export default StarRating
