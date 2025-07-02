// name        : addMovieToLocalStorage
// description : Add a new movie to the local storage
function addMovieToLocalStorage(movie) {
   // step 1: check if a new movie has been provided or not
   if (!movie) return console.error("You need to pass a movie object in order to add one. Please try later.");

   // step 2: extract the movie list from the local storage
   const movies = JSON.parse(localStorage.getItem('movies')) || [];
   
   // step 3: set a new movie list to the local storage with the new movie in the list
   localStorage.setItem('movies', JSON.stringify([...movies, movie]));

   // step 4: log the current movie list local storage
   console.log('current Movies --->', JSON.parse(localStorage.getItem('movies')));
};

// name        : deleteAllMoviesFromLocalStorage
// description : Delete all the movies from the local storage
function deleteAllMoviesFromLocalStorage() {
   // step 1: delete all the movies from the local storage
   localStorage.setItem('movies', JSON.stringify([]));

   // step 2: log the current movies list stored in the local storage
   console.log(JSON.parse('Current Movies--->', localStorage.getItem('movies')));
};

// name        : deleteMovieFromLocalStorage
// description : Delete a single movie from the movies list in the local storage
function deleteMovieFromLocalStorage(movieId) {
   // step 1: check if the movie ID is provided or not
   if (!movieId) return console.error("You must provide a movie ID in order to delete one. Please try later with a valid movie ID");

   // step 2: extract previously added movie list from the local storage
   const previousMovies = JSON.parse(localStorage.getItem('movies')) || [];

   // step 3: check if there is really any movies added to the local storage or not
   if(!previousMovies.length) {
      console.log("You have not added any movies yet");
      return;
   }

   // step 3: delete the movie from the local storage
   const newMovies = previousMovies.filter(movie => movie.id !== movieId);
   localStorage.setItem('movies', JSON.stringify(newMovies));

   // step 4: log the current movie list
   console.log('Current Movies--->', JSON.parse(localStorage.getItem('movies')));
};

// export all the utility functions or helper functions
export {addMovieToLocalStorage, deleteAllMoviesFromLocalStorage, deleteMovieFromLocalStorage};