import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Roing',
        description:'Adventure, Nature, River Rafting, Trekking, Tribal Culture',
        price:'',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI4NzY4NzE2Njc4NjE5Mzg0NzY1NjI1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Bomdilla',
    description:'Mountains, Trekking, Nature, Wildlife, Buddhist Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2ODU1Mjk0ODMzOTMzMjI3MDYyMjI1MzQxNzk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19'
},

{
   name:'Tawang',
   description:'Buddhist Monasteries, Mountains Views, Trekking, Adventure',
   price:'',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU0ODAxMDMwNTIzNzc3MDA4MDU2NjQwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{

    name:'Ziro',
    description:'Music Festival, Natural, Hills, Culture, Adventure',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU2OTA2NjY5ODAyNjY1NzEwNDQ5MjE4OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Itanagar',
    description:'Hill Stations, Northeast India, Adventure, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE2MjU1Nzk5MTA5OTM1NzYwNDk4MDQ2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{

    name:'Namsai',
    description:'Nature, Wildlife, Tea Gardens, Arunachal Pradesh',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2ODAyODU0MTgwMzM1OTk4NTM1MTU2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Anini',
    description:'Mountains, Nature, Treks, Adventure, Offbeat',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwOTYxNjY4Mjg4NzA3NzMzMTU0Mjk2OS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Along',
    description:'Beaches, Surfing, Coastline, Relaxation, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzYzNjAwNjkxNTQxNzc0MjcyOTE4NzAxMTcxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Daporji',
    description:'Nature, Wildlife, Hill Station, Adventure, Trekking',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE3OTQwNjM3MTQ1NTE5MjU2NTkxNzk2ODc1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Jang',
    description:'Beaches, Islands, Relaxation, Scenery, Snorkeling',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIyNzc3OTQyMDg1MjY2MTEzMjgxMjUwMC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Pasighat',
    description:'Adventure, Nature, River Rafting, Wildlife, Arunachal Pradesh',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI3NjkzODgzNzI2NTk2ODMyMjc1MzkwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Changlang',
    description:'Nature, Wildlife, Trekking, Adventure, Tribes',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE3ODg3ODUwNTY1Nzg2MzYxNjk0MzM1OTM3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},
{
    name:'Bhalukpong',
    description:'Nature, Wildlife, Trekking, Adventure',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzE2MTI1NzY2MzE2NDE2MjYzNTgwMzIyMjY1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},
{
    name:'Dirang',
    description:'Nature, Wildlife, Trekking, Mountains, Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE0Njc2Nzg2ODA2NTgzNDA0NTQxMDE1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},



]

const AP2 = () => {
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
            <h2 className='text-3xl font-bold text-gray-800 mb-16'>Top locations across Arunachal Pradesh</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-32 '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-full w-full object-cover rounded-b-lg '/>
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold text-gray-800'>{contents.name}</h3>
                            <p className='text-gray-600'>{contents.description}</p>{contents.price&&(
                                <p className='text-black font-bold mt-2'>From {contents.price}/-per day</p>
                            )}
                     </div>
                    </div>

                ))}
            
                  </Slider>
                  </div>
            
        </div>
  )
}

export default AP2