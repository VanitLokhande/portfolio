import React from 'react'
import portfolio from './portfolio.scss'
import Portfoliolist from '../portfoliolist/Portfoliolist'
import { useState } from 'react';

export default function Portfolio() {
      const [activea,setactivea]=useState("featured")
      const list=[
            {
                  id: "featured",
                  title: "Featured",
            },
            {
                  id: "movie",
                  title: "Movie",
            },
            {
                  id: "music",
                  title: "Music",
            },
            {
                  id: "photography",
                  title: "Photography",
            }
      ];
           
      
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) =>(
            <Portfoliolist title={item.title} active={activea === item.id}
            setactivea={setactivea}
            id={item.id}/>
        ))}

      </ul>
      <div className='container'>
        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>

        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>

        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>

        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>

        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>

        <div className='item'>
              <img src='photos/rev2.png'/>
              <h3>App</h3>
        </div>
      </div>
      
      
    </div>
  )
        }
