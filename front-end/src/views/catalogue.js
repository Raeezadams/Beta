import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import GalleryCard1 from '../components/gallery-card1'
import './catalogue.css'

const Catalogue = (props) => {
  return (
    <div className="catalogue-container">
      <Helmet>
        <title>Catalogue - Beta</title>
        <meta property="og:title" content="Catalogue - Beta" />
      </Helmet>
      <Header></Header>
      <div className="catalogue-gallery">
        <GalleryCard1
          title="Leather Shoe"
          subtitle="R300"
          image_src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxlYXRoZXIlMjBzaG9lfGVufDB8fHx8MTY5NTQ4NDQzN3ww&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName3"
        ></GalleryCard1>
        <GalleryCard1
          title="Canvas Shoe"
          subtitle="R200"
          image_src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGNhbnZhcyUyMHNob2V8ZW58MHx8fHwxNjk1NDg0NDYxfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName4"
        ></GalleryCard1>
        <GalleryCard1
          title="Flyknit "
          subtitle="R250"
          image_src="https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjb3JrJTIwc2hvZXxlbnwwfHx8fDE2OTU0ODQ1ODF8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName5"
        ></GalleryCard1>
        <GalleryCard1
          title="Flyknit "
          subtitle="R250"
          image_src="https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjb3JrJTIwc2hvZXxlbnwwfHx8fDE2OTU0ODQ1ODF8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName"
        ></GalleryCard1>
        <GalleryCard1
          title="Flyknit "
          subtitle="R250"
          image_src="https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjb3JrJTIwc2hvZXxlbnwwfHx8fDE2OTU0ODQ1ODF8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName8"
        ></GalleryCard1>
        <GalleryCard1
          title="Flyknit "
          subtitle="R250"
          image_src="https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjb3JrJTIwc2hvZXxlbnwwfHx8fDE2OTU0ODQ1ODF8MA&amp;ixlib=rb-4.0.3&amp;h=1500"
          rootClassName="rootClassName7"
        ></GalleryCard1>
      </div>
      <div className="catalogue-container01">
        <svg viewBox="0 0 1024 1024" className="catalogue-icon">
          <path d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"></path>
          <path d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"></path>
        </svg>
      </div>
      <div className="catalogue-container02">
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
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="catalogue-image"
            />
            <input
              type="text"
              placeholder="Item"
              className="catalogue-input input"
            />
            <input
              type="text"
              placeholder="Price"
              className="catalogue-input1 input"
            />
            <input
              type="text"
              placeholder="Description"
              className="catalogue-input2 input"
            />
            <div className="catalogue-container11">
              <button type="button" className="catalogue-button button">
                Cancel
              </button>
              <button type="button" className="catalogue-button1 button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogue
