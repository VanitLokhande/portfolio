import React from 'react'
import work from './menu.scss'
import Intro from '../intro/Intro'


export default function Menu({menu , setmenu}) {
  return (
    <>
    <div className={"menu " +(menu && "active")}>
      <ul>
        <li>
           <a href="#intro" onClick={()=>setmenu(false)}>Home</a>
        </li>

        <li>
           <a href='#portfolio' onClick={()=>setmenu(false)}>Portfolio</a>
        </li>

        <li>
            <a href='#works' onClick={()=>setmenu(false)}>Works</a>
        </li>

        <li>
           <a href='#contact' onClick={()=>setmenu(false)}>Contact</a>
        </li>

       
      </ul>
    </div>
    </>
  )
}
