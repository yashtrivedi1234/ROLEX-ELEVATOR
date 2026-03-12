import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text}) => {
  const navigate=useNavigate()
  return (

    <button class="box" onClick={()=>navigate("/contact")}>
<p className={`text-button ${text ? 'text-white' : 'text-white'}`}>
  {text || "DISCOVER OUR LIFT"}
</p>

    </button>
    
  )
}

export default Button