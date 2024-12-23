import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';
function K4() {

  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);


  return (
    <div className='mx-28 sm:mx-auto md:mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center sm:text-2xl md:text-4xl'>A little about Kerala</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center sm:text-xs md:text-base'>Known as God's own country, Kerala is one of India's most beautiful states. A paradise for nature lovers and travelers alike, its serene beaches, backwaters, lush green hills and waterfalls offer stunning views and a peaceful atmosphere. The state is home to many unique attractions, including the Periyar Wildlife Sanctuary and the Neyyar Dam. Kerala is also known for its traditional culture and art forms, such as Kathakali and Mohiniyattam. The state is also known for its delicious cuisine. There are many activities to enjoy, such as trekking, birdwatching, and boat trips. Travelers can explore the state with ease and enjoy its many attractions. The beauty and charm of Kerala will certainly captivate you no matter what time of year you visit. With its stunning landscape, colorful culture, amazing attractions and delicious food, your trip to Kerala will be an unforgettable one

      </p>
      <div className='text-center'>
      <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Kerala now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default K4