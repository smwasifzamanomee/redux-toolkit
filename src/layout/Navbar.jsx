import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-6 bg-green-700 py-6'>
        <Link to="/">Home</Link>
        <Link to="/show-books">Show Books</Link>
        <Link to="/add-book">Add Book</Link>
    </div>
  )
}

export default Navbar