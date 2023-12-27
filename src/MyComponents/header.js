import React from 'react'

export default function header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="/EducareLogo.png" alt="c" width="100" height="100" class="d-inline-block align-text-top"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="educate/public/index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">Sign Up</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#scrollspyHeading2">Web Development</a></li>
                  <li><a className="dropdown-item" href="#scrollspyHeading1">Learn a Language</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#scrollspyHeading3">Interview Prep</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Admission</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}
