import React from 'react'
import { useRef } from 'react'
import './App.css'
import { Header, Footer, Home } from './Components/index.js'


function App() {

  const navbarRef = useRef();

  return (
    <>
      <Header ref={navbarRef} />
      <Home navbarRef={navbarRef} />
      <Footer />
    </>
  )
}

export default App
