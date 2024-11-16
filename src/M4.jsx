import React from 'react'
import GetTravelForm from './GetTravelForm'
import { useState } from 'react'

function M4() {
    const [isPopupOpen, setIsPopupOpen] =useState(false);
    const openPopup =()=> setIsPopupOpen(true);
    const closePopup =()=>setIsPopupOpen(false);
  return (
    <div className='mx-28 '>
      <h1 className='text-4xl font-bold mb-10 mt-14 text-center'>A little about Meghalaya</h1>
      <p className='text-gray-500 text-md font-medium mb-5 text-center'>Meghalaya, located in the North East of India, is a paradise for travellers looking for an offbeat destination. The state is home to a number of natural attractions, including the beautiful waterfalls, lush green hills, and the living root bridges. The crystal-clear rivers, dense forests, and the rolling hills make Meghalaya a great destination for trekking, camping, and rafting. Tourists can also explore the tribal villages and experience the unique culture of the Khasi and Garo tribes. The state is also home to some of the oldest rainforests in the world and a variety of wildlife. Apart from the natural beauty, Meghalaya also offers a variety of cultural experiences like the Nongkrem Dance Festival and the Wangala Festival. With its stunning beauty and rich culture, Meghalaya is a must-visit destination for any traveller looking for an offbeat experience.


      </p>
      <div className='text-center'> 
             <button onClick={openPopup}className="text-black text-lg font-semibold mt-5 px-10 py-1 rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300">Craft a trip to Meghalaya now!</button></div>
      
      <GetTravelForm isOpen ={isPopupOpen}
        onClose={closePopup}/>
    </div>
  )
}

export default M4