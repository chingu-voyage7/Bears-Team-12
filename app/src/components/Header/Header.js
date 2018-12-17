import React from 'react'
import { Link } from 'react-router-dom'
import subjects from 'content/subjects'

import './Header.css'

const Header = () => (
    <nav className="navbar header" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          Communities
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
             Explore
            </a>
            <div className="navbar-dropdown">
                {
                    subjects.map( (subject, i) =>
                    <a key={`subject_${i}`} className="navbar-item">
                      {subject}
                    </a>
                    )
                }
              <hr className="navbar-divider" />
            </div>
          </div>
          <div className="navbar-item" href="#">
              <input class="input" type="text" placeholder="Search subjects" />
          </div>
        </div>
        <div className="navbar-end">
            <a className="navbar-item" href="#">
                About
            </a>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button" style={{
                      backgroundColor : `hsl(217, 71%, 53%)`,
                      color : `white`
                  }}>
                <strong>Sign up</strong>
              </a>
              <a className="button blue">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>)

export default Header
