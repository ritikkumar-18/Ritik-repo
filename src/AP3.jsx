
import React from 'react';
import Slider from 'react-slick'
 export default function AP3(){
   

const trips = [
    {
      title: "Sumit's Romantic Getaway to Arunachal Pradesh",
      locations: "Tawang    •   Itanagar  ",
      curator: " Curated by Sumit Hari",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹24,361",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU1Nzk5MTA5OTM1NzYwNDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',       
    },
    {
      title: "Rohan's Solo Backpacking in Arunachal Pradesh",
      locations: " Itanagar    •   Ziro   • Tawang ",
      curator: " Curated by Rohan Pandit",
      nights: "3 nights",
      details:'2 Stays ︱ 3 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹30,200",
      people: "for per person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU2NzMyMDk2NjcyMDU4MTA1NDY4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
      title: "Rajesh's Family Excursion in Northeast India",
      locations: "Guwahati    •   Gangtok   • Jaintia Hills  •  Itanagar",
      curator: " Curated by Rajesh",
      nights: "3 nights",
      details:'3 Stays ︱ 5 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹53,144",
      people: "for 3 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTM2MjA2MDQwMTg1NDY1ODEyNjgzMTA1NDY4OC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"G's Family Excurdion Anini",
      locations:'Anini',
      curator:' Curated by G Manju',
      nights:'3 nights',
      details:'0 Stays ︱2 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹19,632',
      people:'for 4 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwOTYxNjY4Mjg4NzA3NzMzMTU0Mjk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
        title:"Kouyalee's Getaway with Friends to Arunachal Pradesh",
        locations:'Itanagar    • Tawang',
        curator:'Curated by Kouyalee Debbarma',
        price:'₹2,21,909',
        people:'for 4 person',
        nights:'3 nights',
        details:'2 Stays ︱ 3  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU1Nzk5MTA5OTM1NzYwNDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',

    },

    {
       title:"Isha's Getaway with Friends to Arunachal Pradesh",
       locations:'Itanagar    •  Ziro    • Tawang',
       curator:'Curated by Isha',
       nights:'3 nights',
       details:'2 Stays ︱ 1 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹55,412',
       people:'for 5 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2OTA2NjY5ODAyNjY1NzEwNDQ5MjE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
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
