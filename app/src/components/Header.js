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
    <a href={'/auth/facebook'}>
      Sign in
    </a>
  </div>

)

export default Header