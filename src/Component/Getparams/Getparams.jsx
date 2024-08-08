import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Getparams() {

    let [searxhparams,setsearchparams] = useSearchParams();
    console.log(searxhparams.get("name"))
    console.log(searxhparams.get("city"))

    let name = searxhparams.get("name")
    let city = searxhparams.get("city")


  return (
    <div className='nav-container'>
        <h1>get Params</h1>
        <h1>{city}</h1>
        <h1>{name}</h1>
    </div>
  )
}

export default Getparams