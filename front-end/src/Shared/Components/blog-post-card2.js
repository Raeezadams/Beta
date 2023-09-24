import React, { useContext } from 'react'
import { CurrentUserContext } from '../DataStore'
import PropTypes from 'prop-types'
import './blog-post-card2.css'

const BlogPostCard2 = (props) => { 
  const {CurrentUser} = useContext(CurrentUserContext)
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src= "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">uSER INFO</span>
        </div>
        <span className="blog-post-card2-text1">Name</span>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="input"
        />
        <div className="blog-post-card2-container2">
          <span className="blog-post-card2-text2">Email</span>
        </div>
        <input
          type="text"
          placeholder={props.textinput_placeholder2}
          className="input"
        />
        <div className="blog-post-card2-container3">
          <span className="blog-post-card2-text3">Cell Number</span>
        </div>
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className="input"
        />
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'User Info',
  rootClassName: '',
  image_src: '/placeholder-1500w.jpg',
  text: 'Label',
  textinput_placeholder: CurrentUser.userName,
  textinput_placeholder1: CurrentUser.email,
  textinput_placeholder2: CurrentUser.cellNumber,
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
}

export default BlogPostCard2
