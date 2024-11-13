import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import Form from './Footer'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import { R1 } from './R1'
import R2 from './R2'
import R3 from './R3'
import Slides from './JammuOTher'
import R4 from './R4'
import { Button } from './Jammubutton'

const R = () => {
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
    <R1/>
    <R2/>
    <R3/>
    <R4/>
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

export default R