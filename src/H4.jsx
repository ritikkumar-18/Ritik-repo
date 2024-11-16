import React from 'react'
import { useState } from 'react';
import GetTravelForm from './GetTravelForm';

function H4() {
  
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  return (
    <div className='mx-28'>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Himachal Pradesh</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Himachal Pradesh is a beautiful hill state in India located in the Western Himalayas. It is also known as the “Land of Gods” due to its many temples and shrines, making it a popular destination for tourists from all over the world. Himachal Pradesh is a paradise for nature lovers, offering snow-capped mountains, lush green valleys, and pristine rivers. It is home to some of India’s highest mountain peaks, including the Kullu Valley, Rohtang Pass, and Chail Sanctuary. The state is also known for its vibrant culture and rich history. You can experience this by visiting its many temples, forts, and palaces. In addition, Himachal Pradesh has some of the most popular adventure activities, including trekking, paragliding, and skiing. From its stunning mountainscapes to its vibrant culture, the state has something to offer everyone. You can spend your days exploring the breathtaking landscape or simply relax at one of its many resorts. There are also plenty of opportunities for shopping, with the bustling markets of Shimla offering traditional Himachali handicrafts and souvenirs. If you’re looking for a short break from your busy life, there’s no better place than Himachal Pradesh.


      </p>
      <div className='text-center'>
      <button onClick={openPopup} className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Himachal Pradesh now!</button></div>
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>

    </div>
  )
}

export default H4