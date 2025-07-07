import Divider from '../Divider/Divider'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
   return (
      <section className='w-full max-w-5xl mx-auto'>
         <header>
            <h2 className='text-xl font-bold'>Quick Links</h2>
         </header>

         <Divider />

         <main className='flex gap-2'>
            <Link className='px-3 py-2 bg-gray-500 rounded-md' to={'/movie-watchlist'} >Movie Watchlist</Link>
            <Link className='px-3 py-2 bg-gray-500 rounded-md' to={'/employee-attendances'}>Employee Attendances</Link>
         </main>
      </section>
   )
}

export default QuickLinks
