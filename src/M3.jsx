
import React from 'react';
import Slider from 'react-slick'
 export default function M3(){
   

const trips = [
    {
      title: "Hetarth's Getaway with Friends to Meghalaya",
      locations: "Jaintia Hills    •   Cherrapunji   • Jawai  ",
      curator: " Curated by Hetarth",
      nights: "3 nights",
      details:'0 Stays ︱ 4 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹21,538",
      people: "for 4 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIyNjcxMDM4MDUwNjUxNTUwMjkyOTY4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',       
    },
    {
      title: "Hetarth's Getaway with Friends to Meghalaya",
      locations: "Jaintia Hills    •   Cherrapunji   • Jawai",
      curator: " Curated by Hetarth",
      nights: "3 nights",
      details:'0 Stays ︱ 4 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹21,776",
      people: "for 4 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzMTEyMDE5Nzc5NjgyMTU5NDIzODI4MS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
      title: "Iasan's Solo Trip to Japan",
      locations: "Kyoto    •   Tokyo",
      curator: " Curated by Ishann nyang",
      nights: "3 nights",
      details:'1 Stays ︱ 2 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹81,141",
      people: "for per person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1MzA3OTM1OTM3MDc1NjE0OTI5MTk5MjE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
   
    },
    {
      title:"Iasan's Getaway with Friends to Jammu & Kashmir",
      locations:'Pahalgam    •   Srinagar    • Sonamarg',
      curator:' Curated by Iasan Nyang',
      nights:'3 nights',
      details:'4 Stays ︱5 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹82,976',
      people:'for 4 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjc0NjM1MDYxMDA4NTA0MzkwNzE2NTUyNzM0MzguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMjQwLCJoZWlnaHQiOjEwNDAsImZpdCI6ImNvdmVyIn19fQ==',
    },
    {
        title:"Dm's Getaway with Friends to Meghalaya",
        locations:' Jaintia Hills   •   Cherrapunji    • Jowai',
        curator:'Curated by Dm Sahid',
        price:'₹23,429',
        people:'for 6 person',
        nights:'3 nights',
        details:'0 Stays ︱ 3  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU0Mjk1OTQ5NzYxODY3NTIzMTkzMzU5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',

    },

    {
       title:"Rajesh's Family Excursion in Northeast India",
       locations:'Guwahati   •  Gangtok    •   Jaintia Hills    • Itanagar',
       curator:'Curated by Rajesh',
       nights:'3 nights',
       details:'3 Stays ︱ 5 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹53,144',
       people:'for 3 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTM2MjA2MDQwMTg1NDY1ODEyNjgzMTA1NDY4OC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
  ];
  const settings = {
   dots:true,
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   speed: 2000,
   autoplaySpeed: 2000,
   cssEase: "linear"
 };

   return (
           <div className='p-6 bg-gray-100'>
               <h1 className='text-4xl font-bold mb-16'>Trip by our users</h1>
               <div className='grid md:grid-cols-1 mx-auto gap-4'>
               <Slider {...settings}>
               {trips.map((trip,index)=>(
               <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-10'>
                   <img src={trip.image}alt={trip.name} className='w-full h-48 object-cover'/>
                   <div className='p-4'>
                       <h2 className='text-lg font-semibold'>{trip.title}</h2>
                       <p className='text-sm text-gray-500'>{trip.locations}</p>
                       <p className='text-xs text-gray-400'>{trip.curator}</p>
                       <div className='text-gray-700 text-sm mt-2'>
                           <p>{trip.details}</p>
                       </div>
                       <div className=' flex justify-between items-center mt-4'>
                           <div>
                               <p className='text-lg font-semibold'>{trip.price}/-</p>
                               <p className='text-xs text-gray-500'>{trip.people}</p>
                           </div>
                           <div className='text-center'>
                           <button className='bg-yellow-400 text-black px-3 py-1 rounded hover:bg-black hover:text-white'>View Details</button></div>
                       </div>
                   </div>
                   
                </div>     
            ))}
            </Slider>
                   </div>
       </div>
      
  )}
