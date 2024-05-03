import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" id='nav' href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mx-auto text-center fw-bold mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link to='/all' className="nav-link active" aria-current="page" href="#">ALL</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to='/full-stack-developer' className="nav-link active" href="#">FULL STACK DEVELOPMENT
</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to='/data-science' className="nav-link active" href="#">DATA SCIENCE</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to='/cyber-security' className="nav-link active" href="#">CYBER SECURITY</Link>
        </li>
        <li className="nav-item mx-3">
          <Link to='/career' className="nav-link active" aria-disabled="true">CAREER</Link>
        </li>
      </ul>      
    </div>
  </div>
</nav>
}

export default NavBar

