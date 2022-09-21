import React from 'react'
import work from './work.scss'

export default function Works() {
  return (
    <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
          <div className='left'>
            <div className='leftcontainer'>
              <div className='imgcontainer'>
              <img src='photos/mobile.png'/>
              
              </div>
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem beatae fugiat rem vero illo corrupti porro, unde est magni ad vitae dolorem et modi, inventore, at quae! Dolore, alias itaque!</p>
              <span>Project</span>
            </div>
          </div>
          <div className='right'>
            
            <img src='photos/re.jpg'/>
           
          </div>
          </div>
        </div>
      </div>
      <img src='photos/right.jpg' className='arrow l'/>
      <img src='photos/left2.jpg' className='arrow r'/>

      
    </div>
  )
}
