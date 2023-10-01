import React, { useContext } from 'react'
import { CurrentUserContext } from '../../DataStore'
import PropTypes from 'prop-types'
import './blog-post-card2.css'

const BlogPostCard2 = (props) => { 
  const {currentUser} = useContext(CurrentUserContext)

  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src= {require("../Shared Images/Portrait_Placeholder.png")}
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{currentUser.current.userName}'s INFO</span>
        </div>
        <span className="blog-post-card2-text1">Name</span>
        <span className="blog-post-card2-text">{currentUser.current.userName}</span>

        <div className="blog-post-card2-container2">
          <span className="blog-post-card2-text2">Email</span>
        </div>
        <span className="blog-post-card2-text">{currentUser.current.emailAddress}</span>

        <div className="blog-post-card2-container3">
          <span className="blog-post-card2-text3">Cell Number</span>
        </div>
        <span className="blog-post-card2-text">0{currentUser.current.phoneNumber}</span>

      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'User Info',
  rootClassName: '',
  image_src: '/placeholder-1500w.jpg',
  text: 'Label',
  textinput_placeholder: '',
  textinput_placeholder1: '',
  textinput_placeholder2: '',
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder2: PropTypes.number,
}

export default BlogPostCard2
