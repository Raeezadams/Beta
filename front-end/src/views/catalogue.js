import React, { useContext, useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import './catalogue.css'
import { Product, addProduct } from '../API/Authentification/Index'
import useApi from '../Shared/useapi';
import { toast } from 'react-toastify';
import { getProducts } from '../API/Products/Index'
import { CurrentUserContext } from '../DataStore'


const Catalogue = (props) => {
const { currentUser } = useContext(CurrentUserContext)
var [image, setImage] = useState('https://play.teleporthq.io/static/svg/default-img.svg');
const [isVisible, toggleIsVisible] = useState(false)
const [product, setProduct] = useState({
  name: "",
  price: 0,
  description: "",
  quantity: 0,
  image: image,
})

const addProductHook = useApi({
  action: (product) => addProduct(product),
  defer: true,
  onSuccess: (product) => {
    toggleIsVisible(false)
    toast.success(` ${product.name} sucessfully added`)
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

const getProductHook = useApi({
  action: () => getProducts(),
  data : [],
  onError: (e) => {
    console.log("error", e)

    if(e && e.response && e.response.data && e.response.data.errorMessages)
    {
     e.response.data.errorMessages.forEach((message) => {
       toast.error(message);
      });
    } 
    else toast.error("Network Error")
   }
}, [])

console.log("Products", getProductHook.data)




console.log("product", product)
  return (
    <div className="catalogue-container">
      <Helmet>
        <title>Catalogue - Beta</title>
        <meta property="og:title" content="Catalogue - Beta" />
      </Helmet>
      <Header></Header>
      <div className="catalogue-gallery">

        {
          getProductHook.data && getProductHook.data.map((p) => 
            <GalleryCard1
              description= {p.description}
              title={p.name}
              subtitle={`R${p.price}`}
              image_src={p.image}
              rootClassName="rootClassName3"
            />
        )
        }
        
        
      </div>
      <div className="catalogue-container01">
        { currentUser.current && currentUser.current.isAdmin &&
        <svg viewBox="0 0 1024 1024" className="catalogue-icon" onClick={()=> toggleIsVisible(true)}>
          <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
          <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"></path>
        </svg>
        }
      </div>
      <div className="catalogue-container02" style={{display: isVisible ? 'flex' : 'none'}}>
        <div className="catalogue-container03">
          <div className="catalogue-container04">
            <div className="catalogue-container05">
              <div className="catalogue-container06">
                <div className="catalogue-container07">
                  <div className="catalogue-container08">
                    <div className="catalogue-container09"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="catalogue-container10">
          <label htmlFor = "file-input">
            <img
              src= {image}
              alt="image"
              className="catalogue-image"
            /></label>
             <input
              id="file-input"
              type="file"
              alt = "image"
              accept = "image/*"
              style = {{display : "none"}}
              placeholder="Item"
              onChange={e => {
                const selectFile = e.target.files[0];

                setProduct({
                  ...product,
                  image: selectFile
                })

                if(selectFile instanceof Blob){
                  const reader = new FileReader();
                  reader.onload = e => {
                    setImage(e.target.result)
                  };
                  reader.readAsDataURL(selectFile);
                }
                
              }}
            />
            <input
              type="text"
              placeholder="Product Name"
              className="catalogue-input input"
              onChange={(event) => setProduct({
                ...product,
                name: event.currentTarget.value
              })}

            />
            <input
              type="text"
              placeholder="Price"
              className="catalogue-input1 input"
              onChange={(event) => setProduct({
                ...product,
                price: event.currentTarget.value
              })}
            />
            <input
              type="number"
              placeholder="Quantity"
              className="catalogue-input input"
              onChange={(event) => setProduct({
                ...product,
                quantity: event.currentTarget.value
              })}
            />
            <input
              type="text"
              placeholder="Description"
              className="catalogue-input2 input"
              onChange={(event) => setProduct({
                ...product,
                description: event.currentTarget.value
              })}
            />
            
            <div className="catalogue-container11">
              <button type="button" className="catalogue-button button" onClick={()=> toggleIsVisible(false)}>
                Cancel
              </button>
              <button type="button" className="catalogue-button1 button" onClick={()=> {
                const formData = new FormData();
                formData.append('name', product.name)
                formData.append('price', product.price)
                formData.append('quantity', product.quantity)
                formData.append('description', product.description)
                formData.append('image', product.image)   
                addProductHook.execute(formData)
                
              }}
              disabled={product.name == "" || product.price == 0 || product.quantity == 0 || product.description =="" || product.image == ""}> 
               {addProductHook.inProgress ? "In Progress" :  "Confirm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue
