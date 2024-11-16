import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

  export function U4 () {
    const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Uttarakhand</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Uttarakhand, a northern Indian state located in the Himalayan foothills, is a paradise for travellers. It is known for its beautiful natural landscapes, snow-capped mountains, lush green valleys, and abundant wildlife. The state is home to some of India's most popular hill stations like Nainital, Mussoorie, and Auli, as well as some of the country's most iconic pilgrimage sites such as Haridwar, Rishikesh, and Badrinath. It is also a great destination for adventure activities such as trekking, river rafting, skiing, and paragliding. The state also offers a variety of cultural experiences, including visits to ancient temples, forts, and monuments. With its breathtakingly beautiful landscapes and rich culture, Uttarakhand is an ideal destination for travellers looking for a unique and memorable experience.


      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Uttarakhand now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}