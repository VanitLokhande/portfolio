import React from 'react'
import topbar from './topbar.scss'



export default function Topbar({menu , setmenu}) {
  return (
    <div className={'topbar '+(menu && 'active')}>
      <div className='wrap'>
      <div className='left'>
        <a href='#intro' className='logo'>Vanit Lokhande.</a>
        <div className='itemContainer'>
        

        </div>
        
      </div>
      
      <div className='right'>
        <div className='hamburger' onClick={()=>setmenu(!menu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
        </div>
      </div>

      </div>
      
    </div>
  )
}
