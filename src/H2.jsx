import React from 'react'
import Slider from 'react-slick'



const content =[
    {
        name:'Manali',
        description:'Mountains, Adventure, Treks, paragliding, Nature',
        price:'₹7,320',
        image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MDk2MDY0Njg1MzQ4Mjk2MTY1NDY2MzA4NTkzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Dharamshala',
    description:'Mountains, Dalai Lama, Buddhist Culture, Treks',
    price:'₹6,116',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MTk4NjM4MTkwMDIxODYwNTk5NTE3ODIyMjY1Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
   name:'Kasol',
   description:'Trekking, Camping, River Rafting, Nature, Parvati Valley',
   price:'₹4,062',
   image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjY1MzMzNTMxMjA2NTE5NjAzNzI5MjQ4MDQ2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{

    name:'Toba Village',
    description:'Monasteries, Ancient Culture, Himalayan Views',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcyNjg3MDYxMDA1ODc4NDQ4NDg2MzI4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},


{
    name:'Shimla',
    description:'Hill Station, Colonial Architecture, Adventure Activities',
    price:'₹7,555',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE1OTAwOTkyMjAwODE3NTA4Njk3NTA5NzY1NjI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},


{

    name:'Keylong',
    description:'Mountains, Treks, Adventure, Nature, Himalayas',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTcxMTQxMjA1MzUyNTA2NjM3NTczMjQyMTg3NS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Bilaspur',
    description:'Wildlife, Temples, Nature, Hill Stations, Adventure',
    price:'₹3,183',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTEzMTkzNjkxMDQxNDY5NTczOTc0NjA5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Kangra',
    description:'Mountains, Temples, Tea Gardens, Himachal Pradesh',
    price:'₹1,226',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzMzgyNzkyMDc3MDY0NTE0MTYwMTU2Mi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


{
    name:'Solan',
    description:'Hill Stations, Apple Orchards, Pine Forests',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU0MzI3ODQ1MzYzNjE2OTQzMzU5Mzc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Sirmaur',
    description:'Mountains, Trekking, Nature, Temples',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU0MDY5ODQyMTI4NzUzNjYyMTA5Mzc1MC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Sarahan',
    description:'Himalayan Views, Temples, Trekking, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI5Mjc3MjMwODM5NzI5MzA5MDgyMDMxMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Malana',
    description:'Ancient Village, cannabis, Himalyan Views, Trekking',
    price:'₹876',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI1NTExODI4ODI1NDczNzg1NDAwMzkwNi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Spiti Valley',
    description:'Mountains, Treks, Adventure, Culture',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTY0MzQ1NDk5MjY2MTczODM5NTY5MDkxNzk2OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},
{
    name:'Mashobra',
    description:'Mountains, Nature, Hiking, Apple Orchards',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI1Nzg1MTE3OTE3MDYwODUyMDUwNzgxMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Shoghi',
    description:'Nature,Mountains, Treks, Adventure, views',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzUzNTI3NTU1OTc1OTE0MDAxNDY0ODQzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Fagu',
    description:'Snow Festival, Himachal Pradesh, Winter Wonderland',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTE0ODkzOTgwNDc2ODU2MjMxNjg5NDUzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Kaza',
    description:'Mountains, Treks, Adventure, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NTQzNjQzNTU4MDc4NzY1ODY5MTQwNjI1MDAwMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},

{
    name:'Kasauli',
    description:'Hill Stations, Colonial Charm, Nature Walks',
    price:'₹15,055',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzNzE5Mjk3OTkwNzk4OTUwMTk1MzEyNS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Shoja',
    description:'Mountains, Apple Orchards, Serenity, Trekking',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzUzNTcwNjk5NzIyNzY2ODc2MjIwNzAzMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Tosh',
    description:'Mountains, Treks, Adventure, Nature, Peace',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NjUzOTM5ODgxMjYyMjI2MTA0NzM2MzI4MTI1MC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},
{
    name:'Theog',
    description:'Mountains, Treks, Adventure, Nature, Peace',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY1MzU1MDI5NDgzMDM0NjEwNzQ4MjkxMDE1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Jibhi',
    description:'Mountains, Treks, Adventure, Nature, Peace',
    price:'₹4,051',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTIzMDIyMzk2MDY2MTg4ODEyMjU1ODU5NC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Bir Billing',
    description:'Paragliding, Trekking, Adventure, Nature, Peace',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MzAwNTYwNzMyNTA3MDMzMzQ4MDgzNDk2MDkzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Kufri',
    description:'Mountains, Skiing, Adventure, Nature, wildlife',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjY0MzA5ODk4MzU0OTM4MDMwMjQyOTE5OTIxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},

{
    name:'Kullu',
    description:'Mountains, Treks, Adventure, Nature, Peace',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2MjU1NzQ2OTA4MDY1NDU0OTU5ODY5Mzg0NzY1Ni5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},
{
    name:'Tirthan Valley ',
    description:'Mountains, Treks, Camping, Adventure Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2Mjc2NjY2MDE4OTAxNzc5NjUxNjQxODQ1NzAzMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMwMCwiaGVpZ2h0IjozMDB9fX0=',
},
{
    name:'Nalagarh',
    description:'Temples, History, Hill station, Nature',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTI2NzA0ODkzNjk4NjkyMzIxNzc3MzQzOC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb3ZlciJ9fX0=',
},
{
    name:'Barot',
    description:'Mountains, Treks, Adventure, Rivers, Nature, Peace',
    price:'',
    image:'https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY2l0aWVzLzE2NzY0OTExOTE1NjE0OTU1NDI1MjYyNDUxMTcxOS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMDAsImhlaWdodCI6MzAwfX19',
},


]

const H2 = () => {
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
            <h2 className='text-3xl font-bold text-gray-800 mb-16'>Top locations across Himachal Pradesh</h2> 
                <div className='grid grid-cols-1 gap-4 mb-8 ml-32 '>
                <Slider {...settings}>
                {content.map((contents,index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg overflow-hidden mx-auto '>
                        <img src={contents.image}alt={contents.name}className='h-full w-full object-cover rounded-b-lg '/>
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

export default H2