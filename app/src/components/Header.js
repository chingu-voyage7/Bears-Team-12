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
      Facebook
    </a>
    {" | "} 
    <a href={'/auth/google'}>
      Google
    </a>
    {" | "} 
    <a href={'/auth/logout'}>
      Sign Out
    </a>
  </div>

)

export default Header