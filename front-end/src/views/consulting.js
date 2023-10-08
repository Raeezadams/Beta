import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './consulting.css'

const Consulting = (props) => {
  return (
    <div className="consulting-container">
      <Helmet>
        <title>Consulting - Beta</title>
        <meta property="og:title" content="Consulting - Beta" />
      </Helmet>
      <header data-thq="thq-navbar" className="consulting-navbar-interactive">
        <Link to="/" className="consulting-navlink">
          <img alt="logo" src="/icon-1500h.png" className="consulting-image" />
        </Link>
        <div data-thq="thq-navbar-nav" className="consulting-desktop-menu">
          <nav className="consulting-links">
            <Link to="/software-development" className="consulting-text">
              Software Development
            </Link>
            <Link to="/outsourcing" className="consulting-navlink01">
              Outsourcing
            </Link>
            <Link to="/ui-ux-design" className="consulting-navlink02">
              UI &amp; UX Design
            </Link>
            <Link to="/outsourcing" className="consulting-navlink03">
              Consulting
            </Link>
          </nav>
          <Link to="/" className="consulting-navlink04">
            <div className="consulting-buttons">
              <svg
                fill="#d19d54"
                viewBox="0 0 1024 1024"
                className="consulting-icon"
              >
                <path d="M870.286 765.143c-14.857-106.857-58.286-201.714-155.429-214.857-50.286 54.857-122.857 89.714-202.857 89.714s-152.571-34.857-202.857-89.714c-97.143 13.143-140.571 108-155.429 214.857 79.429 112 210.286 185.714 358.286 185.714s278.857-73.714 358.286-185.714zM731.429 365.714c0-121.143-98.286-219.429-219.429-219.429s-219.429 98.286-219.429 219.429 98.286 219.429 219.429 219.429 219.429-98.286 219.429-219.429zM1024 512c0 281.714-228.571 512-512 512-282.857 0-512-229.714-512-512 0-282.857 229.143-512 512-512s512 229.143 512 512z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="consulting-icon02"
              >
                <path d="M877.714 512c0 241.714-197.143 438.857-438.857 438.857s-438.857-197.143-438.857-438.857c0-138.857 64-266.857 175.429-350.286 32.571-24.571 78.286-18.286 102.286 14.286 24.571 32 17.714 78.286-14.286 102.286-74.286 56-117.143 141.143-117.143 233.714 0 161.143 131.429 292.571 292.571 292.571s292.571-131.429 292.571-292.571c0-92.571-42.857-177.714-117.143-233.714-32-24-38.857-70.286-14.286-102.286 24-32.571 70.286-38.857 102.286-14.286 111.429 83.429 175.429 211.429 175.429 350.286zM512 73.143v365.714c0 40-33.143 73.143-73.143 73.143s-73.143-33.143-73.143-73.143v-365.714c0-40 33.143-73.143 73.143-73.143s73.143 33.143 73.143 73.143z"></path>
              </svg>
              <span className="consulting-text01">Skhumbuzo</span>
            </div>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="consulting-burger-menu">
          <svg viewBox="0 0 1024 1024" className="consulting-icon04">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="consulting-mobile-menu">
          <div className="consulting-sidebar">
            <nav className="consulting-nav">
              <img
                alt="image"
                src="/icon-1500h.png"
                className="consulting-image1"
              />
              <span className="consulting-text02">Software Development</span>
              <span className="consulting-text03">Outsourcing</span>
              <span className="consulting-text04">UI &amp; UX Design</span>
              <span className="consulting-text05">Consulting</span>
              <span>Partnership</span>
            </nav>
            <span className="consulting-text07">Partnership</span>
          </div>
        </div>
      </header>
      <div className="consulting-container1">
        <div className="consulting-banner">
          <div className="consulting-container2">
            <h1 className="consulting-text08">Consulting Services</h1>
            <span className="consulting-text09">
              <span>
                With our comprehensive consulting services, we provide expert
                guidance and support throughout the entire software development
                lifecycle. From strategy to implementation, we help you build
                better software solutions.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="consulting-banner1">
        <h1 className="consulting-text13">Our expertise, your advantage</h1>
        <span className="consulting-text14">
          Our software development life cycle (SDLC) consulting services provide
          end-to-end solutions for businesses looking to build and manage
          software applications.
        </span>
      </div>
      <div className="consulting-features">
        <div className="consulting-container3">
          <FeatureCard2
            title="Requirements Gathering"
            image_src="/requirements-gathering.svg"
            description="We help businesses define and prioritise software requirements, ensuring that the final product meets user needs and business goals"
            rootClassName="rootClassName12"
          ></FeatureCard2>
          <FeatureCard2
            title="Architecture and Design"
            image_src="/architecture-and-design.svg"
            description="Our team of experts design scalable and efficient software architecture, incorporating the latest technologies and industry best practices."
            rootClassName="rootClassName13"
          ></FeatureCard2>
          <FeatureCard2
            title="Development and Testing"
            image_src="/development-and-testing.svg"
            description="We use agile development methodologies and rigorous testing to ensure that software applications are developed on time, on budget, and with high quality."
            rootClassName="rootClassName14"
          ></FeatureCard2>
          <FeatureCard2
            title="Deployment and Maintenance"
            image_src="/deployment-and-maintenance.svg"
            description="We help businesses deploy software applications to production environments and provide ongoing maintenance and support to ensure optimal performance."
            rootClassName="rootClassName15"
          ></FeatureCard2>
        </div>
      </div>
      <footer className="consulting-footer">
        <div className="consulting-container4">
          <Link to="/" className="consulting-navlink05">
            <img
              alt="logo"
              src="/icon-1500h.png"
              className="consulting-image2"
            />
          </Link>
          <nav className="consulting-nav1">
            <Link to="/software-development" className="consulting-navlink06">
                  Software Development
            </Link>
            <Link to="/outsourcing" className="consulting-navlink07">
              Outsourcing
            </Link>
            <Link to="/ui-ux-design" className="consulting-navlink08">
              UI &amp; UX Design
            </Link>
            <Link to="/outsourcing" className="consulting-navlink09">
              Consulting
            </Link>
          </nav>
        </div>
        <div className="consulting-separator"></div>
        <div className="consulting-container5">
          <span className="consulting-text15">
            © 2017 Target Online Pty Ltd, All Rights Reserved.
          </span>
          <div className="consulting-container6">
            <div className="consulting-container7">
              <svg viewBox="0 0 1024 1024" className="consulting-icon06">
                <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="consulting-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Consulting
