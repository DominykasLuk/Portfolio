import React from 'react'

import { Routes, Route } from "react-router-dom";
import Login from './routes/Login/Login'
import Home from './routes/Home/Home'
import Register from './routes/Register/Register'
import Search from './routes/Search/Search';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App