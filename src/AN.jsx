import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import Form from './Footer'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Button } from './Jammubutton'
import { AN1 } from './AN1'
import AN2 from './AN2'
import AN3 from './AN3'
import AN4 from './AN4'

const AN = () => {
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
    <AN1/>
    <AN2/>
    <AN3/>
    <AN4/>
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

export default AN