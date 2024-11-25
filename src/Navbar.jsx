import React from 'react'
import './Navbar.css'
import { useState,useEffect } from 'react'
import GetTravelForm from './GetTravelForm'
import OtpAuthentication from './Loginpage'

export const Navbar = ( ) => {
 


  const [isPopupOpen, setIsPopupOpen] =useState(false);

  const [showOtpAuth, setShowOtpAuth] = useState(false); // State for OTP Authentication popup


  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  const openOtpAuthentication = () => {
    setShowOtpAuth(true);}
    const handleSearchClick = () => {
      navigate('/search');
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    // Close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  

  
  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">

    <div className="flex items-center space-x-2 relative xs:left-5  md:left-16">
      <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvd2Vic2l0ZS9sb2dvLW9ubHkuc3ZnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIn19fQ==" alt="logo" className="w-12 h-12 xs:w-10 xs:h-10 xs:left-1"/>
      <span className="font-bold text-black absolute left-10 top-5 xs:text-xs xs:left-4">thetarzanway</span>
    </div>

    <div className="flex-1 mx-4 hidden md:block ml-96">
      <div className="relative max-w-screen-sm">
       
        <span  className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
          </svg>
        </span>
        
       
        
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-md focus:outline-none  "
        />
      </div>
    </div>


    <div className="flex items-center space-x-4 mr-20">
      <button onClick={openPopup} className="bg-yellow-400 text-black hover:bg-black hover:text-white border border-black font-semibold py-2 px-4 rounded-md transition-all hidden md:block">
        Create a Trip
      </button>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
        <div className='xs:ml-10 sm:mr-20'>
        <button onClick={handleSearchClick} className="md:hidden bg-gray-200 rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  text-gray-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l5 5" />
          </svg>
        </button>
        </div>
        <div className=''>

        <button onClick={toggleMenu} className="relative md:hidden ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 xs:text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        </div>





      
      <div className="relative">
        <button className="flex items-center text-black hidden md:block">
          <span  className="sr-only">Account Menu</span>
          <svg   xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24 "onClick={openOtpAuthentication}>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4 0-8 1.99-8 4v2h16v-2c0-2.01-4-4-8-4z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        
      </div>
    
    </div>
  </nav>
    
  )
}
