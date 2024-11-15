import React from 'react'
import { Navbar } from './Navbar'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import { U1 } from './U1'
import U2 from './U2'
import { useEffect } from 'react'
import U3 from './U3'
import { U4 } from './U4'

const Uttrakhand = () => {
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
    <U1/>
    <U2/>
    <U3/>
    <U4/>
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

export default Uttrakhand