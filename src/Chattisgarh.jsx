import React from 'react'
import { Navbar } from './Navbar'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'
import { useEffect } from 'react'

const Chattisgarh = () => {
    useEffect(() => {
        // Scroll to the top of the page when App1 is rendered
        window.scrollTo({
            top:0,
            behavior:'smooth'
          });
          
        }, []);
  return (
    <>
    <Navbar/>
    <Button/>
    <Slides/>
    <WhyPlanWithUs/>
    <Happy/>
    <Jammuarticle/>
    <Jammucontact/>
    <Form/>
    </>
  )
}

export default Chattisgarh