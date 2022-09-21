import React from 'react'
import { useState } from 'react';
import contact from './contact.scss';

export default function Contact() {
    const [masge , setmaseg]=useState(false);


  const handlesub = (e)=>{
    
    e.preventDefault();
    setmaseg(!masge)
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
      <img src='photos/contact-03.png'/>



      </div>



      <div className='right'>
          <h2>Contact.</h2>
          <form onSubmit={handlesub}>
              <input type="text" placeholder='Email'/>
              <textarea placeholder='masg'></textarea>
              <button type='submit'>Send</button>
              {masge && <span>Thanks,I will reply</span>}

          </form>


      </div>
      
    </div>
  )
}
