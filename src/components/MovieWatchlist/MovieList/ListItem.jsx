import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';

const ListItem = ({ data, onWatched, onUnwatched, onDelete }) => {
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
      <li className='px-3 py-1.5 flex items-center justify-between'>
         <span>
            {movieName}
         </span>

         <div className='flex items-center gap-3'>
            <span>
               {!isWatched
                  ?
                  (<button onClick={() => handleWatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-green-500 cursor-pointer active:scale-105'>Watched</button>)
                  :
                  (<button onClick={() => handleUnwatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-red-500 cursor-pointer active:scale-105'>Unwatched</button>)
               }
            </span>

            <button className='p-2 bg-red-500 rounded-md active:scale-105 cursor-pointer hover:bg-red-600' onClick={() => handleDeleteBtnClick(movieId)}>
               <FaTrashCan />
            </button>

         </div>
      </li>
   )
};

export default ListItem
