
import React from 'react';
import Slider from 'react-slick'
 export default function S3(){
   

const trips = [
    {
      title: "Kartik's Family Trip to Lachung",
      locations: "Lachung  ",
      curator: " Curated by Kartik Gupta",
      nights: "3 nights",
      details:'1 Stays ︱ 2 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹32,989",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYwMjY5MTY2MzY5NDM4MTcxMzg2NzE4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
    },
    {
        title: "Kartik's Family Trip to Lachung",
        locations: "Lachung  ",
        curator: " Curated by Kartik Gupta",
        nights: "3 nights",
        details:'1 Stays ︱ 2 Transfers ︱ 0 Flights ︱ 0 Activities',
        price: "₹39,041",
        people: "for 3 person",
        image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYwMjY5MTY2MzY5NDM4MTcxMzg2NzE4OC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',       
      },
    {
      title: "Abhilash's Romantic Getaway to Sikkim",
      locations: "Gangtok    •   Pelling",
      curator: " Curated by Abhilash",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹34,455",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQ3MTQ4MjA1NTIyMDE1MDk0NzU3MDgwMDc4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
   
    },
    {
      title:"Divya's Getaway with Friends to Sikkim",
      locations:'Gangtok    •   Pelling    • Lachung',
      curator:' Curated by Divya ROshan Mahto',
      nights:'3 nights',
      details:'3 Stays ︱4 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹37,662',
      people:'for 2 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk3NDYwMjc1MDA5MTMxNDMxNTc5NTg5ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
        title:"Prasanta's Family Excurison in Sikkim",
        locations:' Siliguri    •   Silchar    • Gangtok',
        curator:'Curated by Prasanta Singha',
        price:'₹39,789',
        people:'for 3 person',
        nights:'3 nights',
        details:'3 Stays ︱ 5  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQ3MTUwMjc5NzczMDA4ODIzMzk0Nzc1MzkwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Apurv's Solo Backpacking in Sikkim",
       locations:'Gangtok    •   Pelling    • Lachung',
       curator:'Curated by Apurv',
       nights:'3 nights',
       details:'3 Stays ︱ 4 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹37,073',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjQ3MTQ4MjA1NTIyMDE1MDk0NzU3MDgwMDc4MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
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
