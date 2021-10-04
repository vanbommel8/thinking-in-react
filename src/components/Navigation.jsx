import React from 'react'

const Navigation = (props) => (
  <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          My Library
        </a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li>
          <button className="btn btn-lg btn-outline">
            <i className="fa fa-graduation-cap" /> <span>Training</span>
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
