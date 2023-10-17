import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
  return (
    <header style={{ width: "100%" }}>
      <nav className="header-part">
        <h3 className='logo'>FLIP MART</h3>
        <ul className="nav-items">
          
          <li ><Link to='/' className='list-items'>Home</Link> </li>
          <li ><Link to='/products' className='list-items'>Products</Link> </li>
          <li ><Link to='/about' className='list-items'>Abou us</Link></li>
          <li ><Link to='/contact' className='list-items'>Contact</Link></li>
          {/* <li className='list-items'><Link to='/cart'>Cart</Link></li> */}
          
        </ul>
        <h5>
        <Link to='/cart' className='list-items'>Cart</Link>
        </h5>
       
      </nav>
    </header>
  )
}

export default Navbar