
import React from 'react';
import Slider from 'react-slick'
 export default function PAN3(){
   

const trips = [
    {
      title: "Patel's Getaway with Friends to Amritsar",
      locations: "Amritsar ",
      curator: " Curated by Patel harsh",
      nights: "3 nights",
      details:'1 Stays ︱ 2 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹45,111",
      people: "for 6 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MzU0NDA2MjUwOTUzMTIzNTY5NDg4NTI1MzkwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',       
    },
    {
      title: "Pragathi's Family Trip to Amritsar",
      locations: " Amritsar ",
      curator: " Curated by Pragathi Prassad",
      nights: "3 nights",
      details:'1 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹1,10,161",
      people: "for 6 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MzU0NDA2MjUwOTUzMTIzNTY5NDg4NTI1MzkwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
      title: "Jatin's Getaway with Friends to Shimla",
      locations: "Shimla",
      curator: " Curated by Jatin Bhatnagar",
      nights: "3 nights",
      details:'1 Stays ︱ 4 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹8,849",
      people: "for 3 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTAwOTkyMjAwODE3NTA4Njk3NTA5NzY1NjI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Vema's Getaway with Friends to Nainital",
      locations:'Nainital',
      curator:' Curated by Veema Pooja Thanusri',
      nights:'3 nights',
      details:'1 Stays ︱2 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹54,416',
      people:'for 5 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTY1ODczNzAxNzA1OTU4ODQzMjMxMjAxMTcxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
        title:"Naitik's Getaway with Friends to Dalhouse",
        locations:'Dalhouse',
        curator:'Curated by Naitik Agarwal',
        price:'₹50,288',
        people:'for 4 person',
        nights:'3 nights',
        details:'1 Stays ︱ 3  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODQxMzgyODk4MDc5ODI2ODMxODE3NjI2OTUzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Harman's Family Trip to Amritsar",
       locations:'Amritsar',
       curator:'Curated by Harman',
       nights:'3 nights',
       details:'1 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹89,936',
       people:'for 4 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MzU0NDA2MjUwOTUzMTIzNTY5NDg4NTI1MzkwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
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
