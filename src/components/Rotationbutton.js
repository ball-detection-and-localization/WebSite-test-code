import React, { useState } from 'react';


function Rotationbutton() {
const [rotation , setrotation] = useState(false);
    function pressed(){
        setrotation(!rotation);

    }


  return (
    <div>
        <div className={`line ${rotation ? "rotate": ""}`}></div>
        <div className="circle"></div>
        <button onClick={pressed}>ok</button>
    
    
    </div>
    
  )
}

export default Rotationbutton