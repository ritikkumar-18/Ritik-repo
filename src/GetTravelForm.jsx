import React from 'react'
import { useEffect } from 'react';

const GetTravelForm = () => {
    useEffect(() => {
        // Scroll to the top of the page when App1 is rendered
        window.scrollTo({
          top:0,
          behavior:'smooth'
        });
        
      }, []);
  return (
 
    <div className='relative h-screen overflow-hidden z-1 flex items-center justify-center'>
         <img
      src=" https://img.freepik.com/free-photo/pool-nature-landscape-palm-ocean_1203-4912.jpg?semt=ais_hybrid"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className='absolute flex items-center justify-center  min-h-screen min-w-screen'>
    
    <div className="bg-white  p-3 rounded-lg shadow-lg shadow-[#bb60bb] max-w-md ">
        <h2 className="text-3xl font-bold mb-7 ">Get your free travel plan now</h2>

        
        <label className="block mb-2 text-lg font-bold">What do you want to explore?</label>
        <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
        <input type="text" placeholder="Search destination" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />
        <button type="button" className="text-blue-500 mt-2 ">
               + Add Destination
           </button>

        
        <label className="block mb-3 text-lg font-bold">When are you planning to travel?</label>
        <div className='text-md font-bold flex items-center justify-between mr-32 mb-1'>
          <p>Start Date</p>
          <p>End Date</p>
        </div>
        


        <div className="flex items-center justify-center space-x-4">
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
        </div>


        <div className="flex items-center text-center mt-5">
          <input type="checkbox" id="unsure" className="mr-2" />
          <label htmlFor="unsure" className="text-sm font-semibold">Not sure? Let us decide best time for your trip.</label>
        </div>


        <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
          Continue
        </button>
      </div>

      </div>
      </div>
    
    
  )
}

export default GetTravelForm