import React from 'react'

import { FaCalendarAlt, FaTicketAlt, FaRegClock } from "react-icons/fa";


const activity=[{
    header:"Gulmarg",
    name:"Gulmarg Gondala Ride",
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoiY3JtLzIwMjMtMDEtMTIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwfX19',
    date:"18th Sept 2023",
    hour:"1 Hour",
    ticket:'2 Ticket'},
    {
    header:"Amritsar",
    name:"Wagah Border Tour With Ceremony",
    description:'Wagah Border Tour With Golden Temple in Amritsar, Punjab is a must-see for every traveller. It offers an incredible experience, with a visit to the majestic Golden Temple and a thrilling tour of the Wagah Border. At the Golden Temple, you can explore the beautiful architecture and take in the spiritual atmosphere. At the border, you can witness the daily flag-lowering ceremony, where the Indian and Pakistani soldiers perform a unique and exciting drill. You can also enjoy the vibrant culture and lively atmosphere of the nearby markets. This tour is a great way to experience the beauty and history of the region.',

    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvYWN0aXZpdGllcy8xNjgxNTI5OTk2MTQ4MjQyNDczNjAyMjk0OTIxODguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    date:"7th March 2024",
    hour:"8 Hour",
    ticket:'4 Ticket'},
    {
    header:"Coorg",
    name:"Special Trip to Coorg",
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoiY3JtL2dvbGRlbi10ZW1wbGUtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDB9fX0=',
    date:"4th Dec 2022",
    hour:"14 Hour",
    ticket:'1 Ticket'
},
{
    header:"Rishikesh",
    name:"Life in a Pahadi Village",
    description:'1. Live with the villagers',
    title:'2. Explore Garhwali Culture',
    icon :'3. Enjoy local food & barbecue',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoiY3JtLzNfbTRncUp4SC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDB9fX0=',
    date:"28th Feb 2023",
    hour:"12 Hour",
    ticket:'1 Ticket'
},
    

]

export const Activities = () => {
  return (
    <> <>
    <h1 className="text-4xl font-bold ml-16  mt-16 mb-5 xs:ml-1">Activities</h1>
    <div className='p-6 ml-16 sm:ml-2 xs:mx-auto'>
      {activity.map((acti, index) => (
        <div key={index} className="mb-10">
          <h1 className="text-black text-3xl font-bold mb-5">{acti.header}</h1>
          <div
            className="w-[80%] flex flex-col sm:mx-auto sm:w-auto xs:w-full  md:flex-row items-start md:items-stretch mb-6 bg-white p-4 rounded-3xl border-2 border-gray-300 hover:shadow-lg hover:shadow-teal-200 cursor-pointer hover:border-teal-300 transition-all duration-300"
          >
            
            <div className="w-full md:w-1/4 relative">
              <img
                src={acti.image}
                alt={acti.name}
                className="rounded-lg w-full h-[90%] object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#01202B] text-white text-sm font-semibold font-serif px-2 py-1 rounded-full">
                {acti.type}
              </span>
            </div>

          
            <div className="flex-1 ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between ">
              <div>
                <h2 className="text-lg font-bold">{acti.name}</h2>
                <p className="text-gray-500">{acti.location}</p>
                <p className="text-gray-500">{acti.description}</p>
                <p className="text-gray-500">{acti.title}</p>
                <p className="text-gray-500 mb-10">{acti.icon}</p>

          

              
                <div className="mt-2 flex">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{acti.date}</strong>
                    </p>
                  </div>
                  <div className="flex items-center mb-2 ml-5">
                    <FaTicketAlt className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{acti.ticket}</strong>
                    </p>
                  </div>
                  <div className="flex items-center mb-2 ml-5">
                    <FaRegClock className="text-gray-700 mr-2" />
                    <p className="text-gray-700">
                      <strong>{acti.hour}</strong>
                    </p>
                  </div>
                  
                </div>
              </div>

          
              
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
</>
  )
}
