import React from 'react';
import { FaAddressBook, FaInstagram,FaFacebook,FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <h1 style={{textAlign : 'center',margin:'30px 0'}}>Externel Style Demo</h1>
      <section id='header'>
        <div className="call-us">
          <b>Call Us: +91 - 9106233393 </b>
        </div>
        <div className="search-box">
          <input type="text" placeholder='serach something' />
        </div>
        <div className="social-media">
          <div className="icons-group">
             <FaAddressBook className='icons'></FaAddressBook>  
             <FaInstagram className='icons'></FaInstagram>
             <FaFacebook className='icons'></FaFacebook>
             <FaTwitter className='icons'></FaTwitter>
          </div>
        </div>
      </section>
    </>
  )
}
