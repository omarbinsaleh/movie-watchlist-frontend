import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import StarRating from '../StarRating/StarRating';

const ListItem = ({ data, onWatched, onUnwatched, onDelete, onRatingChange }) => {
   const { id: movieId, movieName, ott, rating, isWatched } = data;

   const handleWatchedBtnClick = (movieId) => {
      onWatched(movieId);
      console.log(`Watched this movie with ID-${movieId} already..!`)
   }

   const handleUnwatchedBtnClick = (movieId) => {
      onUnwatched(movieId);
      console.log(`Unwatch this movie with the ID ${movieId}`)
   }

   const handleDeleteBtnClick = (movieId) => {
      onDelete(movieId);
      console.log(`The movie with the ID-${movieId} has been deleted successfully`);
   }

   return (
      <li className='px-3 py-1.5 flex items-center justify-between '>
         <span className='w-sm sm:min-w-[200px]'>
            {movieName}
         </span>

         <div>
            <StarRating value={rating} movieId={movieId} onRatingChange={onRatingChange} />
         </div>

         <div className='flex items-center gap-3 ml-2'>
            <span>
               {!isWatched
                  ?
                  (<button onClick={() => handleWatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-green-500 cursor-pointer active:scale-105 text-sm'>Watched</button>)
                  :
                  (<button onClick={() => handleUnwatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-red-500 cursor-pointer active:scale-105 text-sm'>Unwatched</button>)
               }
            </span>

            <button className='p-2 bg-red-500 rounded-md active:scale-105 cursor-pointer hover:bg-red-600 text-sm' onClick={() => handleDeleteBtnClick(movieId)}>
               <FaTrashCan />
            </button>

         </div>
      </li>
   )
};

export default ListItem
