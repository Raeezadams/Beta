import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks5 from './navigation-links5'
import './header.css'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <header data-role="Accordion" className="header-header">
      <Link to = "/home" ><img
        alt={props.image_alt}
        src={props.image_src}
        className="header-image"
      />
      </Link>

      <div className="header-separator"></div>
      <nav className="header-nav">
        <NavigationLinks5
          text4="Profile"
          rootClassName="rootClassName19"
        ></NavigationLinks5>
      </nav>
      <div data-role="AccordionHeader" className="header-accordion-header">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div data-role="AccordionContent" className="header-accordion-content">
        <div className="header-nav1">
          <NavigationLinks5 rootClassName="rootClassName20"></NavigationLinks5>
        </div>
      </div>
    </header>
  )
}

Header.defaultProps = {
  image_alt: 'logo',
  image_src: '/delivery-man-riding-red-scooter-illustration_9845-14-1500w.jpg',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Header
