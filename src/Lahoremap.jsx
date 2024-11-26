import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function Aboutlahore() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);

  return (
    <div className='mx-28 sm:mx-auto md:mx-28'>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center sm:text-2xl md:text-4xl'>A little about Ladakh</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center sm:text-xs md:text-base'>Ladakh, a picturesque region located in the northernmost part of India, is a dream destination for many. Often referred to as the ‘Land of High Passes’, it is a place of stark beauty and serenity, boasting a rich culture and history. With its snow-capped mountains, high plateaus, and unspoiled landscapes, Ladakh is a paradise for travel enthusiasts. The best way to explore Ladakh is to trek through its majestic mountains. Whether you are a beginner or a pro, there are several options for you to choose from. At the same time, you can also visit the many monasteries, such as the Thiksey Monastery and the Hemis Monastery, which are full of spiritual and historical significance. The markets in Leh and the nearby villages are sure to provide you with the best shopping experience, with a variety of items such as carpets, jewelry, traditional clothes, and handicrafts. Apart from the stunning views and activities, Ladakh has something for everyone. Whether you are looking for adventure, leisure, or culture, Ladakh is the perfect destination. So, if you’re looking for a unique travel experience, Ladakh is the place to be!

      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Ladakh now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    
    </div>
  )
}

export default Aboutlahore