import React, { useEffect } from 'react'
import { CurrentUserContext } from '../../DataStore'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import './blog-post-card2.css'
import {useNavigate} from 'react-router-dom'
//import '../../style.css'

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
      src= {require("../Shared Images/Portrait_Placeholder.png")}
      className="blog-post-card2-image"
    />
      <div className="blog-post-card2-container">
        <div className="blog-post-card2-container1">
          <span className="blog-post-card2-text">{currentUser.current.userName}'s INFO</span>
        </div>
        <span className="blog-post-card2-text1">Name</span>
        <span className="blog-post-card2-text">{currentUser.current.userName}</span>
        <span>{props.text111}</span>
        <div className="blog-post-card2-container2">
          <span className="blog-post-card2-text3">Email</span>
        </div>
        <span>{props.text1}</span>
        <span className="blog-post-card2-text">{currentUser.current.emailAddress}</span>
        <div className="blog-post-card2-container3">
          <span className="blog-post-card2-text5">Cell Number</span>
        </div>
        <span>{props.text11}</span>
        <span className="blog-post-card2-text">0{currentUser.current.phoneNumber}</span>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_alt: 'User Info',
  textinput_placeholder1: '',
  text1: '',
  rootClassName: '',
  text11: '',
  textinput_placeholder2: '',
  textinput_placeholder: '',
  image_src: '/placeholder-1500w.jpg',
  text: 'Label',
  text111: '',
}

BlogPostCard2.propTypes = {
  image_alt: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  textinput_placeholder2: PropTypes.number,
  textinput_placeholder: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text111: PropTypes.string,
}

export default BlogPostCard2
