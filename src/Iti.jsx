import React from 'react'
import { Navbar } from './Navbar'
import Itinerary from './Itinerary'
import Itinerary2 from './Itinerary2'
import { useEffect } from 'react'
import Stays from './Stays'
import { Activities } from './Activities'


export const Iti = () => {
    useEffect(() => {
        // Scroll to the top of the page when App1 is rendered
        window.scrollTo({
          top:0,
          behavior:'smooth'
        });
        
      }, []);
  return (
    <div className='bg-white'>
    <Navbar/>
    <Itinerary/>
    {/* <Itinerary2/> */}
    {/* <Stays/>
    <Activities/> */}

    </div>
  )
}
