import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavApp() {
  return (
    <React.Fragment>
       <Navbar className="nav navbar navbar-expand-md bg-dark text-white">
        <a href='' className='navbar-brand ms-3 fs-2 text-white'>
          FlipKart 
        </a>
       </Navbar>
    </React.Fragment>
  )
}
