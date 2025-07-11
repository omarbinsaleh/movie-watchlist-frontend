import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HomeBtn = () => {
   return (
      <Link to={'/'}>
         <button className='p-1.5 hover:bg-gray-700 text-white rounded-md px-3 cursor-pointer active:scale-105 ease-in flex items-center justify-center gap-2 '>
            <FaHome /> Go to Home
         </button>
      </Link>
   )
}

export default HomeBtn
