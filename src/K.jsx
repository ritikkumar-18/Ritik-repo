import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import WhyPlanWithUs from './JammuForm'
import Form from './Footer'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import { K1 } from './K1'
import K2 from './K2'
import Slides from './JammuOTher'
import K3 from './K3.jsx'
import K4 from './K4.jsx'
import { Button } from './Jammubutton.jsx'

const K = () => {
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
    <K1/>
    <K2/>
    <K3/>
    <K4/>
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

export default K