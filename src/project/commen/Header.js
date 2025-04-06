import React from 'react'
import"./Header.scss"
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  return (
    <div>
      
      <div className='list'>
      <div className='head'>
        <div className='tit'><FaOpencart />  doooo it</div>
        
      </div>
          <Link to="/h"><button class="btn" onclick="">𝐻ome</button></Link>
          <button class="btn" onclick="">𝒫ricing</button>
          <button class="btn" onclick="">𝐹eatures</button>
         <Link to="/a"> <button class="btn" onclick="">𝒜boutus</button></Link>
          <button class="btn" onclick="">𝐻elp</button>
        
      </div>
    </div>
  )
}

export default Header