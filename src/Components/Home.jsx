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
            <Link to="/dashboard">Dashboard</Link>
        </div>
    </div>
  )
}

export default Home
