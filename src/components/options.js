import React from 'react'
import image from '../../src/Images/faputa.png'

function Options1() {
     console.log("pressed");

     

     return (
        
        <div className='Hidden'>
            <div className='optionsbox1'>
                <div className='optionsset1'>
                    <img className='image1' src={image} alt='image1'/>
                        <div className='dropdownimage1'>option 1</div>
                </div>

                <div className='optionsset2'>
                    <img className='image2' src={image} alt='image2'/>
                    <div className='dropdownimage2'>option 2</div>
                </div>

                
                <div className='optionsset3'>
                    <img className='image3' src={image} alt='image3'/>
                    <div className='dropdownimage3'>option 3</div>
                </div>

            </div>
            
        </div>
        
    
        
   )
   
}

export default Options1