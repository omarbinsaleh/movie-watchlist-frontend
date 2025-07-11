import Divider from '../Divider/Divider'
import QuickLink from './QuickLink'

const QuickLinks = () => {
   return (
      <section className='w-full max-w-5xl mx-auto'>
         <header>
            <h2 className='text-xl font-bold'>Quick Links</h2>
         </header>

         <Divider />

         <main className='flex gap-2'>
            <QuickLink to={'/movie-watchlist'} > Movie Watchlist </QuickLink>
            <QuickLink to={'/employee-attendances'} > Employee Attendances </QuickLink>
         </main>
      </section>
   )
}

export default QuickLinks
