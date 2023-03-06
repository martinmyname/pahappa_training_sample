import './App.css';
import React, { useState } from 'react';


function Button () {
    
    const [ number , setNumber]  = useState(0) ;

    const sub =()=>{ 
        console.log('The button for subtracting was clicked');
        setNumber(number - 1)
    }
    const add =()=>{ 
        console.log('The button for adding was clicked');
        setNumber(number + 1)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , flexDirection: 'column'}}>
            
            <p>{number}</p>

            <div>
                
<button onClick={add}  style={{ padding: '10px', marginRight: '10px',backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>+</button>

<button onClick={() => {
    setNumber(0)
    console.log('The button for clearing was clicked')}} style={{ padding: '10px', marginRight: '10px',backgroundColor: 'grey', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>clear</button>

<button onClick={sub}  style={{ padding: '10px', marginRight: '10px',backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>-</button>
      
        
            </div>
            
            </div>
    );
}
export default Button;