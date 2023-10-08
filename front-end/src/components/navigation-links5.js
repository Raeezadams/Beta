import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links5.css'

const NavigationLinks5 = (props) => {
  return (
    <nav className={`navigation-links5-nav ${props.rootClassName} `}>
      <span className="navigation-links5-text">{props.text}</span>
      <span className="navigation-links5-text1">{props.text1}</span>
      <Link to="/catalogue" className="navigation-links5-navlink">
        {props.text2}
      </Link>
      <span className="navigation-links5-text2">{props.text3}</span>
      <Link to="/profile" className="navigation-links5-navlink1">
        {props.text31}
      </Link>
    </nav>
  )
}

NavigationLinks5.defaultProps = {
  text: 'About',
  rootClassName: '',
  text2: 'Catalogue',
  text4: 'Blog',
  text3: 'Team',
  text1: 'Features',
  text31: 'Profile',
}

NavigationLinks5.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text31: PropTypes.string,
}

export default NavigationLinks5
