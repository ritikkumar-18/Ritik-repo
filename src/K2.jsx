import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Munnar',
        description:'Tea Plantation, Hill Station',
        price:'₹6,739',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjIzNjAyMDExMjQwMTkzODQzODQxNTUyNzM0NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},

{
    name:'Alleppey',
    description:'Backwaters, Houseboats',
    price:'₹6,906',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjI0NDI5OTU0NTk1NjE4MjQ3OTg1ODM5ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},

{
   name:'Thekkady',
   description:'Wildlife, Spice Plantations',
   price:'₹7,108',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNzk4Nzc2MTc1NzU4ODM4NjUzNTY0NDUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{

    name:'Kochi',
    description:'Backwaters, Fort Kochi, Spice Plantation',
    price:'₹6,329',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjIzNzcwNjcyNTUwOTMzMzYxMDUzNDY2Nzk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},


{
    name:'Trivanduram',
    description:'Beaches, Backwaters, Temple',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1MzA4MTAwNTY1MzMwOTgyMjA4MjUxOTUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},


{

    name:'Wayanad',
    description:'Wildlife, Treks, Tea Plantations',
    price:'₹7,019',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjEzMzIzMDM2Mzc1NjMyMjg2MDcxNzc3MzQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},


{
    name:'Kannur',
    description:'Beaches, Backwaters',
    price:'₹2,081',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3MjA4MDg2ODQ4MjU4OTcyMTY3OTY4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Thrissur',
    description:'Festivals, Temples, Cultural',
    price:'₹3,982',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjM1NjkwNjU0NjQ3NTk4MjY2NjAxNTYyNTAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},


{
    name:'Kumarakom',
    description:'Backwaters, Houseboats',
    price:'₹9,152',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3NDI2MzYzOTIxMTY1NDY2MzA4NTkzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Munreo Island',
    description:'Backwaters, Kayaking, Houseboats',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcwMzE0Mzc2OTQ3MDAwMDI2NzAyODgwODU5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvdmVyIn19fQ==',
},
{
    name:'Kodanad',
    description:'Wildlife, Tea Plantation',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3MzAxNzk5MzAyMTAxMTM1MjUzOTA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},
{
    name:'Thalassery',
    description:'History, Spice Trade, Colonial',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNzk4MzU5NDI4MDkzNDMzMzgwMTI2OTUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},
{
    name:'Bekal',
    description:'Backwaters, Beaches, Forts',
    price:'₹7,233',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3MDYxMzE2ODA0ODg1ODY0MjU3ODEyNS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},
{
    name:'Kozhikode',
    description:'Backwaters, Beaches, Spice Trade',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3NDAwMTc5NDc5MTIyMTYxODY1MjM0NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Mannarkkad',
    description:'Spice gardens, Ayurveda',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNzc0MjEzNDE4NTk4MTc1MDQ4ODI4MTI1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Kottayam',
    description:'Backwaters, kerala Cuisine,...',
    price:'₹2,891',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjE3MzE4ODMwNDYxNTAyMDc1MTk1MzEyNS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Mananthavady',
    description:'Wayanda, Spice Plantaion',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNzQ3MzM3MDgyMjc2MzQ0Mjk5MzE2NDA2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

{
    name:'Paithalmala',
    description:'Hill stations, Treking, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNzk1NzA1MjQ1MTMyNDQ2Mjg5MDYyNTAwMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},

]

const K2 = () => {
    const settings = {
        dots:true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    
    <div className='bg-gray-100 container  px-4 mt-14'>
            <h2 className='text-3xl font-bold text-gray-800 mb-16'>Top locations across Kerala</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-32 '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-fullw-full object-cover rounded-b-lg '/>
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

export default K2