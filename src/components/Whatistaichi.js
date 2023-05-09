import React, { useState } from 'react'
import Holdingsun from '../../src/Images/holdingsun.png'
import './Whatistaichi.css'
import Heading1 from './Heading1'
import Paragraph1 from './Paragraph1'
import Heading2 from './Heading2'
import Paragraph2 from './Paragraph2'
import Rotationbutton from './Rotationbutton'


function Whatistaichi() {
  

  return (
    
    <div className='Whatistaichi'>
      
      
    
      <Heading1></Heading1>
      <Paragraph1></Paragraph1> 
      <Heading2></Heading2>  
      <div className='Sidebyside'>
                 
        <Paragraph2></Paragraph2>
        <div>
          <img className='Image1' src={Holdingsun} alt='Image1'/>

        </div>
        
        
      </div>
        <Rotationbutton/>
      
      
        
      

    </div>
    
  )
}

export default Whatistaichi