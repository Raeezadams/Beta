import { Helmet } from 'react-helmet'
import Header from '../Shared/Components/header'
import BlogPostCard2 from '../Shared/Components/blog-post-card2'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Beta</title>
        <meta property="og:title" content="Profile - Beta" />
      </Helmet>
      <Header></Header>
      <BlogPostCard2 >
      </BlogPostCard2>
    </div>
  )
}

export default Profile
