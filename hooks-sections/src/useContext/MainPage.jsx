import React from 'react'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Route, Routes, Navigate } from "react-router-dom"

const MainPage = () => {
  return (
    <>
      <h1>MainPage</h1>
      <hr />

      <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/about" element={ <AboutPage />} />
          <Route path="/login" element={ <LoginPage />} />

          <Route path="/*" element={ <Navigate to="/about" />} />

      </Routes>
    </>
  )
}

export default MainPage