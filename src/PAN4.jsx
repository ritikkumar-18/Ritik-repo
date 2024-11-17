import React from 'react'
import { useState } from 'react'
import GetTravelForm from './GetTravelForm'

function PAN4() {
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Punjab</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Punjab is a vibrant state in India known for its rich culture and heritage. It is home to the majestic Golden Temple, the spiritual heart of the Sikh religion. Tourists can explore the colourful bazaars of Amritsar, the historic capital of Punjab, or take a dip in the holy waters of the Beas River. Punjab is also known for its delicious cuisine, which includes tandoori chicken, butter chicken, and the famous Amritsari fish. Tourists can also experience the culture and hospitality of the locals by visiting the many historic monuments and vibrant villages. Punjab is an ideal destination for travellers seeking a unique cultural experience.


      </p>
      <div className='text-center'>
      <button onClick={openPopup} className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Punjab now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default PAN4