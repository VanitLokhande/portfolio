import { init } from 'ityped';
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import intro from './intro.scss'
import Typed from 'react-typed';


export default function Intro() {
    

   

  return (
    <div className='intro' id='intro'>
      
      <div className='left'>
        <div className='containerimg'>
            <img src='photos/red.png'/>
        </div>
        
      </div>
      <div className='right'>
          <div className='wrap'>
            <h4>Hi There,</h4>
            
            <h3>I m <Typed
                  strings={["Vanit Lokhande","a Front End Developer"," a CP Coder"]}
                  typeSpeed={75}
                  backSpeed={35}
                  loop/>
              
           
            </h3>
            
            
            <a href='#portfolio'>
              <img src='photos/down-arrow.png'/>
            </a>
            </div>

          </div>
    </div>
  )
}
