import { Link } from 'react-router-dom'

const QuickLink = ({to, className, children}) => {
   const defaultClassName = 'px-3 py-2 bg-gray-600 rounded-md max-w-[130px] text-center ';

  return (
    <Link to={to ? to : ''} className={`${defaultClassName} ${className ? className : ''}`} >
      {children}
    </Link>
  )
}

export default QuickLink
