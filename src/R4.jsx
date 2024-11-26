import React from 'react'
import { useState } from 'react'
import GetTravelForm from './GetTravelForm'

function R4() {
  const [isPopupOpen, setIsPopupOpen] =useState(false);
  const openPopup =()=> setIsPopupOpen(true);
  const closePopup =()=>setIsPopupOpen(false);
  

  return (
    <div className='mx-28 sm:mx-auto md:mx-28'>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center sm:text-2xl md:text-4xl'>A little about Rajasthan</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center sm:text-xs md:text-base'>Rajasthan is one of the most popular tourist destinations in India. From stunning fortresses to mesmerizing sand dunes, the state offers a plethora of attractions for travelers. The state is known for its exquisite palaces and forts, which offer spectacular views of the surrounding landscape. Jaipur, the capital city, is home to the famous Amber Fort, a magnificent structure that stands for the grandeur of the Rajputs. Udaipur, known as the City of Lakes, is renowned for its breathtaking architecture and lakeside views. Jodhpur, the Blue City, is another must-visit destination. Apart from its architectural marvels, Rajasthan is also home to numerous wildlife sanctuaries and national parks. The Ranthambore National Park is known for its tigers and other wildlife. Here, travelers can enjoy desert safaris and camel rides. Rajasthan is also famous for its vibrant culture and colorful festivals. The Pushkar Fair is one of the most popular festivals in the state. Here, travelers can witness traditional folk performances and shop for local handicrafts. Rajasthan is also known for its delicious cuisine. A visit to here would be incomplete without trying the famous Dal Baati Churma, Gatte Ki Sabzi, Laal Maas and other local delicacies. From majestic forts and palaces to wildlife sanctuaries, the state has something for everyone. So get your camera ready and explore the beauty of Rajasthan and don't forget to wish everyone "Khamma Ghani" while you're there

      </p>
      <div className='text-center'>
      <button onClick={openPopup} className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Rajasthan now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default R4