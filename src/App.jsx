import { Toaster } from 'react-hot-toast'
import MovieWatchlist from './components/MovieWatchlist/MovieWatchlist'
import Router from './router/Router'

function App() {

  return (
    <div className='bg-gray-800 text-white'>
      <Router />
      <Toaster />
    </div>
  )
}

export default App
