import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieWatchlist from '../components/MovieWatchlist/MovieWatchlist'
import EmployeeAttendance from '../pages/EmployeeAttendance/EmployeeAttendance'
import Home from '../pages/Home/Home'

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />
   },
   {
      path: '/movie-watchlist', 
      element: <MovieWatchlist />
   },
   {
      path: '/employee-attendances',
      element: <EmployeeAttendance />
   }
])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
