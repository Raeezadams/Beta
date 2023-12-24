import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'
import useApi from '../Shared/useapi'
import { addToCart } from '../API/Cart/Index'

const GalleryCard1 = (props) => {
  const addToCart = useApi({
    action: (addCartItem) => addToCart(addCartItem),
    defer: true,
    onSuccess: (cartItem) => {
      toast.success(` ${cartItem.productName} sucessfully added`)
      location.reload();
    },
    onError: (e) => {
      if(e && e.response && e.response.data && e.response.data.errorMessages)
      {
       e.response.data.errorMessages.forEach((message) => {
         toast.error(message);
        });
      } 
      else toast.error("Network Error")
     }
  }, [])
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
      <div onClick={()=> addToCart.execute({
        cartId: 1,
        userId: 1,
        productName: "Shoes"
      })} className="gallery-card1-container">
        <span className="gallery-card1-text2">{addProductHook.inProgress ? "In Progress" : "Add to cart"}</span>
      </div>
    </div>
  )
}

GalleryCard1.defaultProps = {
  button: 'Button',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
  title: 'Project Title',
  image_alt: 'image',
  rootClassName: '',
  text: 'ADD TO CART',
}

GalleryCard1.propTypes = {
  button: PropTypes.string,
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default GalleryCard1
