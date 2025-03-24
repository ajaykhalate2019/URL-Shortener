import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
    <div className="container mx-auto flex justify-end space-x-4">
      <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
    </div>
  </nav>
  )
}

export default Navbar