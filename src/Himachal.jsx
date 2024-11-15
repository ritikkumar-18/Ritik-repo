import React from 'react'
import { Navbar } from './Navbar'
import Form from './Footer'
import { Happy } from './Happy'
import { Button } from './Jammubutton'
import Slides from './JammuOTher'
import WhyPlanWithUs from './JammuForm'
import Jammuarticle from './Jammu.article'
import Jammucontact from './Jammucontact'
import { H1 } from './H1'
import H4 from './H4'
import H2 from './H2'
import H3 from './H3'

const Himachal = () => {
  return (
    <>
     <Navbar/>
     <H1/>
     <H2/>
     <H3/>
     <H4/> 
     <Button/>
     <Slides/>
     <WhyPlanWithUs/>
     <Jammuarticle/>
     <Jammucontact/>
     <Happy/>
     <Form/>    
    </>
  )
}

export default Himachal