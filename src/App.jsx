import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>This is the App Components</h1>
      <Routes>
           <Route path='/' element={<Home/>}/>

      </Routes>
    </div>
  )
}

export default App
