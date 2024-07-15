function NavBar() {

    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container"> 
  <div className="d-flex justify-content-center align-items-center gap-2">
      <img src="/logo.png" alt="logo image" />
      <p className="m-0">Lasles<span className="logo">VPN</span></p>
    </div>
      

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">  <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#plans">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reviews">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto">  <li className="nav-item">
          <a className="nav-link" href="#">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
  
  export default NavBar