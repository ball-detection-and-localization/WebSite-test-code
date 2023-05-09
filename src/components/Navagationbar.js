
import Options1 from '../components/options.js'
import Tester from './Tester.js'
import React, { useState } from 'react';

function Navagationbar() {
  const [dropdown, setdropdown]= useState(false)
  const zoomelement= document.querySelector(".button2");
  let zoom=1;

  document.addEventListener("wheel", function(e){
    if (e.deltaY>0){
      zoomelement.style.transform=`scale(${(zoom+=0.06)})`;
 }  else{
      zoomelement.style.transform=`scale(${(zoom-=0.06)})`;
 }
})
  
  return (
    <div >
      <div className='navbar'>
        <button className='button1' onClick={()=> setdropdown(!dropdown)}>Options</button>
        <button className='button2'>Dropdown</button>
        <button className='button3'>Stick to top</button>
      </div>
      <script></script>
      <div className='optionstest'></div>
      {dropdown ? <Options1/> : <Tester/>}
      <div>test</div>

    </div>
  )
}

export default Navagationbar

function oof(){
  const zoomelement= document.querySelector(".button2");
  let zoom=1;

  document.addEventListener("wheel", function(e){
    if (e.deltaY>0){
      zoomelement.style.transform=`scale(${(zoom+=0.06)})`;
 }  else{
      zoomelement.style.transform=`scale(${(zoom-=0.06)})`;
 }
})
}