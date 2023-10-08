import React, { useEffect } from 'react'
import { CurrentUserContext } from '../DataStore'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import './blog-post-card2.css'
import {useNavigate} from 'react-router-dom'

const BlogPostCard2 = (props) => {
  const {currentUser} = useContext(CurrentUserContext)
 
  const navigate = useNavigate();

  useEffect(() => {
    //if (currentUser.current.userName == 'Default') navigate('/')
  },[])
 
  
  return (
    <div className={`blog-post-card2-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card2-image"
      />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{currentUser.current.userName}'s INFO</span>
        </div>
        <span className="blog-post-card2-text1">Name</span>
        <span>{currentUser.current.userName}</span>
        <div className="blog-post-card2-container2">
          <span className="blog-post-card2-text3">Email</span>
        </div>
        <span>{currentUser.current.email}</span>
        <div className="blog-post-card2-container3">
          <span className="blog-post-card2-text5">Cell Number</span>
        </div>
        <span>0{currentUser.current.phoneNumber}</span>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'User Info',
  textinput_placeholder1: 'placeholder',
  text1: 'PhoneNumberPlaceholder',
  rootClassName: '',
  text11: 'PhoneNumberPlaceholder',
  textinput_placeholder2: 'placeholder',
  textinput_placeholder: 'placeholder',
  image_src: '/placeholder-1500w.jpg',
  text: 'Label',
  text111: 'PhoneNumberPlaceholder',
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text111: PropTypes.string,
}

export default BlogPostCard2
