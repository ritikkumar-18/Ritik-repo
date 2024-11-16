import React from 'react'
import { Navbar } from './Navbar'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import { Happy } from './Happy'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import Form from './Footer'
import M3 from './M3'
import { AS1 } from './AS1'
import AS2 from './AS2'
import AS3 from './AS3'
import { useEffect } from 'react'

const Assam = () => {
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
    <AS1/>
    <AS2/>
    <M3/>
    <AS3/>
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

export default Assam