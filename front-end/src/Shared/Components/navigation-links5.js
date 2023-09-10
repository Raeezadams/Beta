import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links5.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={`navigation-links5-nav ${props.rootClassName} `}>
      <span className="navigation-links5-text">{props.text}</span>
      <span className="navigation-links5-text01">{props.text1}</span>
      <span className="navigation-links5-text02">{props.text2}</span>
      <span className="navigation-links5-text03">{props.text3}</span>
      <div
        data-thq="thq-dropdown"
        className="navigation-links5-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links5-dropdown-toggle"
        >
          <span className="navigation-links5-text04">Profile</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links5-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links5-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links5-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links5-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links5-dropdown-toggle1"
            ></div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links5-dropdown1 list-item"
          >
            <Link to="/profile" className="">
              <div
                data-thq="thq-dropdown-toggle"
                className="navigation-links5-dropdown-toggle2"
              >
                <span className="navigation-links5-text05">
                  <span className="">Account Info</span>
                  <br className=""></br>
                </span>
              </div>
            </Link>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links5-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links5-dropdown-toggle3"
            >
              <span className="navigation-links5-text08">Settings</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links5-dropdown3 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links5-dropdown-toggle4"
            >
              <span className="navigation-links5-text09">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  text: 'About',
  rootClassName: '',
  text2: 'Pricing',
  text4: 'Blog',
  text3: 'Team',
  text1: 'Features',
}

NavigationLinks5.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks5
