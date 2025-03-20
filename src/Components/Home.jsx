import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <nav>
            <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <div>
            <p>Dashboard</p>
            <Link className='bg-blue-500 text-black px-4 py-2 rounded border-2 border-black' to="/dashboard">Dashboard</Link>
            <br />
            <br />
            <Link className='bg-green-500 text-white px-4 py-2 rounded border-2 border-black' to={"/Dialog"}>Dialog</Link>
        </div>
    </div>
  )
}

export default Home
