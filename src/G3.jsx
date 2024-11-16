
import React from 'react';
import Slider from 'react-slick'
 export default function G3(){
   

const trips = [
    {
      title: "Teja's Getaway with Friends to North India",
      locations: "Vrindavan   •   Varanasi   • NewDelhi  ",
      curator: " Curated by Teja",
      nights: "7 nights",
      details:'3 Stays ︱ 1 Transfers ︱ 0 Flights ︱ 0 Activities',
      price: "₹87,207",
      people: "for 25 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjI1NDMxMTE5MjA2OTE3Mjg1OTE5MTg5NDUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',       
    },
    {
      title: "Shaik's Getaway with Friends to Agonda",
      locations: " Agonda ",
      curator: " Curated by Shaik Imaad Hassain",
      nights: "3 nights",
      details:'1 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities  ',
      price: "₹7,822",
      people: "for 2 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjMxNzIxNDY3NDc0NTA1OTAxMzM2NjY5OTIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',
    },
    {
      title: "Teja's Getaway with Friends to Uttar Pradesh",
      locations: "Allahabd   •   Ayodhya    • Varanasi",
      curator: " Curated by Teja",
      nights: "3 nights",
      details:'2 Stays ︱ 1 Transfers ︱ 0 Flights ︱0 Activities',
      price: "₹2,80,356",
      people: "for 25 person",
      image: 'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjEyODM5MTM2ODY3NTIzMTkzMzU5Mzc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
   
    },
    {
      title:"Teja's Getaway with Friends to Uttar Pradesh",
      locations:'Vrindavan    •   Allahabad  • Varanasi',
      curator:' Curated by Teja',
      nights:'3 nights',
      details:'2 Stays ︱2 Transfers ︱ 0 flights ︱ 0 Activities',
      price:'₹2,38,773',
      people:'for 25 person',
      image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwNjQ1MzU4OTEwNTYwNjA3OTEwMTU2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
    },
    {
        title:"Purvai's Family Excursion in Agonda",
        locations:' Agonda',
        curator:'Curated by Purvai Naik',
        price:'₹17,880',
        people:'for 4 person',
        nights:'3 nights',
        details:'1 Stays ︱ 2  Transfers ︱0 Flights ︱ 0 Activities ',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjMxNzIxNDY3NDc0NTA1OTAxMzM2NjY5OTIxOS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjYwMCwiaGVpZ2h0IjozMDB9fX0=',

    },

    {
       title:"Ajay's Romantic Getaway to Goa",
       locations:'Calangute    •   Agonda',
       curator:'Curated by Ajay baldaniya',
       nights:'3 nights',
       details:'2 Stays ︱ 2 Transfers ︱0 Flights ︱ 0 Activities ',
       price:'₹29,786',
       people:'for 2 person',
       image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1Mjk1MzIyMzMyNzUxNzUwOTQ2MDQ0OTIxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2MDAsImhlaWdodCI6MzAwfX19',
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
