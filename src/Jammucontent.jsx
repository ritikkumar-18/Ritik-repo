import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'



const content =[
    {
        name:'Srinagar',
        description:'Kashmir Valley,Houseboats, Dal Lake',
        price:'₹9,543',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1ODUzMDEwMTU0MzQ3NDg4ODgwMTU3NDcwNzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
        route:'/phalgam'
},

{
    name:'Sonmarg',
    description:'Mountains, Trekking, Glaciers',
    price:'₹18,131',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTQwMDM1MDgwMDM4NjAyMzUyMTQyMzMzOTg0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
    route :'/phalgam',
},

{
   name:'Gulmarg',
   description:'skiing, Gondala, Snow ',
   price:'₹21,455',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTc1MzIyNzY4NzExMzgwOTU4NTU3MTI4OTA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
   route :'/phalgam',
},

{

    name:'Pahalgam',
    description:'Adventure Treks, Mountains, Nature',
    price:'₹12,000',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0Mjk0OTEyNzg0MjI4MzI0ODkwMTM2NzE4OC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},


{
    name:'Sanasar',
    description:'Mountains, Nature, Treks',
    price:'₹12,500',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI5MTEzMTc2MDE2ODA3NTU2MTUyMzQzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},


{

    name:'Pulwama',
    description:'Kashmir Valley, Apple Orchards',
    price:'₹9,000',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI4MDM0MzUyNTk4MTkwMzA3NjE3MTg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},


{
    name:'Anantnag',
    description:'Kashmir Valley, Mountains, Treks',
    price:'₹8,500',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwOTM1NDU5NTc1NjUzMDc2MTcxODc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},

{
    name:'vaishno Devi',
    description:'Pilgrimage, Temple, Hiking, Mountians',
    price:'₹7,000',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2MDYyMjg1MzQ0NjAwNjc3NDkwMjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},


{
    name:'Dachigam National Park',
    description:'Wildlife, Kashmir Valley, Himalayas',
    price:'₹11,000',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzOTQwNTkxMzg3NzQ4NzE4MjYxNzE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
    route :'/phalgam',
},

{
    name:'Patnitop',
    description:'Mountains, Treks, Snow, Adventure',
    price:'₹7,500',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMzE0Mzc2OTQ3MDAwMDI2NzAyODgwODU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
    route :'/phalgam',
},

]

const Jammucontent = () => {
    const navigate = useNavigate();
  
    const goTo = (route) => {
      navigate(route); 
    
    };
    const settings = {
        dots:true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        responsive:[
          {
            breakpoint:1200,
            settings:{
              slidesToShow:2,
              slidesToScroll:1,
            },
          },
          {
            breakpoint:768,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
              arrows:false,
              dots:false,
            },
          },]
      };
   
      
  return (
    
    <div className='bg-gray-100 container  px-4  mt-14 '>
            <h2 className='text-4xl font-bold text-gray-800 mb-16 sm:text-3xl md:text-4xl xs:ml-10'>Top locations across Jammu & Kashmir</h2> 
                <div className='grid grid-cols-1 gap-20  mb-8 md:ml-40 sm:ml-8 sm:mx-auto sm:w-full mx-auto md:w-full md:h-full'>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto relative'>
                        <img src={contents.image} onClick={()=>goTo(contents.route)} alt={contents.name} className='h-full w-full object-cover rounded-b-lg, cursor-pointer xs:w-full xs:h-full sm:w-full sm:h-full'/>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-800'>{contents.name}</h3>
                            <p className='text-gray-600'>{contents.description}</p>{contents.price&&(
                                <p className='text-black font-bold mt-2'>From{contents.price}/-per day</p>
                            )}
                     </div>
                    </div>

                ))}
            
                  </Slider>
                  </div>
            
        </div>
  )
}

export default Jammucontent