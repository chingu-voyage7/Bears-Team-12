import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

  <div>
    <Link to={"/"}><span>Communities</span></Link>
    {" | "} 
    Browse 
    {" | "} 
    Search
    {" | "} 
    <Link to={"/about"}><span>About</span></Link>
    {" | "} 
    Sign In
  </div>

)

export default Header