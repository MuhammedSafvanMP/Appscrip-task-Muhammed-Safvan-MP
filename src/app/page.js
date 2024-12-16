'use client'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Filter from './components/Filter'
import Card from './components/Card'
import Footer from './components/Footer'





export default function Home() {

  const [sidebar, setSidebar] = useState(false)

  return (
    <>
        <Navbar />
        <Header />
        <Filter setSidebar = { setSidebar }  />
        <Card sidebar = { sidebar } />
        <Footer />
    </>
  )
}
