
import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const style={
  marginTop:'10px'
}
const Header = () => (
  <header style={style}>
  <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Micro Frontend POC</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/orderlookup'>OrderLookUp</Link></li>
        </ul>
      </div>
  </nav>
 
  </header>


)

export default Header
