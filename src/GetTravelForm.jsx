
import React from 'react'

const GetTravelForm = ( { isOpen, onClose}) => {
  if (!isOpen) return null;
  
  return (
 
    <div className=' fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center h-screen mb-20 overflow-hidden z-50'>
         {/* <img
      src=" https://img.freepik.com/free-photo/pool-nature-landscape-palm-ocean_1203-4912.jpg?semt=ais_hybrid"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    /> */}
    {/* <div className='absolute flex items-center justify-center  min-h-screen min-w-screen'> */}
    
    <div className="  bg-white p-3 rounded-lg shadow-lg shadow-[#bb60bb] max-w-md ">
        <h2 className="text-3xl font-bold mb-7 text-black ">Get your free travel plan now</h2>

        
        <label className="block mb-2 text-lg font-bold  text-black">What do you want to explore?</label>
        <input type="text" placeholder="Delhi, IN" className="w-full mb-1 p-3 border rounded-md focus:outline-none" />
        <input type="text" placeholder="Search destination" className="w-full mb-4 p-3 border rounded-md focus:outline-none" />
        <button type="button" className="text-blue-500 mt-2 ">
               + Add Destination
           </button>

        
        <label className="block mb-3 text-lg font-bold  text-black">When are you planning to travel?</label>
        <div className='text-md font-bold flex items-center justify-between mr-32 mb-1  text-black'>
          <p>Start Date</p>
          <p>End Date</p>
        </div>
        


        <div className="flex items-center justify-center space-x-4">
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
          <input type="date" placeholder="DD/MM/YYYY" className="w-1/2 p-3 border rounded-md focus:outline-none uppercase" />
        </div>


        <div className="flex items-center text-center mt-5">
          <input type="checkbox" id="unsure" className="mr-2" />
          <label htmlFor="unsure" className="text-sm font-semibold  text-black  ">Not sure? Let us decide best time for your trip.</label>
        </div>


        <button className="bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
          Continue
        </button>
        
        <button onClick={onClose} className='bg-yellow-400 hover:bg-black text-black hover:text-white transition-all border border-black font-bold  py-2 w-20 rounded-md mt-6 mb-5'>Close</button>
      </div>

      </div>
      // </div>
    
    
  )
}

export default GetTravelForm