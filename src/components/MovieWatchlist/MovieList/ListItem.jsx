import React from 'react'

const ListItem = ({ data, onWatched, onUnwatched }) => {
   const { id: movieId, movieName, ott, rating, isWatched } = data;

   const handleWatchedBtnClick = (movieId) => {
      onWatched(movieId);
      console.log(`Watched this movie with ID-${movieId} already..!`)
   }

   const handleUnwatchedBtnClick = (movieId) => {
      onUnwatched(movieId);
      console.log(`Unwatch this movie with the ID ${movieId}`)
   }

   return (
      <li className='px-3 py-1.5 flex items-center justify-between'>
         <span>
            {movieName}
         </span>

         <span>
            {!isWatched
               ?
               (<button onClick={() => handleWatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-green-500'>Watched</button>)
               :
               (<button onClick={() => handleUnwatchedBtnClick(movieId)} className='py-1 px-2 rounded-md bg-red-500'>Unwatched</button>)
            }
         </span>
      </li>
   )
};

export default ListItem
