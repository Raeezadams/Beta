import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogPostCard2 from '../components/blog-post-card2'
import './profile.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = (props) => {
  
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("betaUser") == null)
    {
      navigate("/");
      toast.info("Please sign in first")
    }
    //if (currentUser.current.userName == 'Default') navigate('/')
  },[])
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Beta</title>
        <meta property="og:title" content="Profile - Beta" />
      </Helmet>
      <Header></Header>
      <BlogPostCard2></BlogPostCard2>
    </div>
  )
}

export default Profile
