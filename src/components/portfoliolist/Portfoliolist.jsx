import React from 'react'
import portfolio from './portfoliolist.scss'

export default function Portfoliolist({title,active,setactivea,id}) {
  return (
    
      <li className={active ? 'portfoliolist active':'portfoliolist'}
      onClick={() => setactivea(id)}>{title}</li>
       
    
  )
}
