import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg mb-5 py-5">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a href="#">
        <img src={require("../static/Logo.png")} alt="Logo" className="logo"/>
      </a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a href="#"><strong>pricing</strong></a>
        </li>
        <li className="nav-item">
          <a href="#"><strong>features</strong></a>
        </li>
        <li className="nav-item">
          <a href="#"><strong>product</strong></a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <a href="#"><strong>sign in</strong></a>
        <button className="btn my-2 my-sm-0 get-started" type="submit"><strong>get started</strong></button>
      </form>
    </div>
  </nav>
)

export default Navbar;