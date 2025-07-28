import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Content from './components/Content'
import Footer from './components/Footer'

export default function Layout() {
  return (
    <>
     <Header></Header>
     <Navbar></Navbar>
     <div className="parent" style={{display:'flex'}}>
           <Slidebar></Slidebar>
           <Content></Content>
     </div>
     <Footer></Footer>
    </>
  )
}
