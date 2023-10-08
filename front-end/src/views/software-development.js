import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FeatureCard2 from '../components/feature-card2'
import './software-development.css'

const SoftwareDevelopment = (props) => {
  return (
    <div className="software-development-container">
      <Helmet>
        <title>SoftwareDevelopment - Beta</title>
        <meta property="og:title" content="SoftwareDevelopment - Beta" />
      </Helmet>
      <header
        data-thq="thq-navbar"
        className="software-development-navbar-interactive"
      >
        <Link to="/" className="software-development-navlink">
          <img
            alt="logo"
            src="/icon-1500h.png"
            className="software-development-image"
          />
        </Link>
        <div
          data-thq="thq-navbar-nav"
          className="software-development-desktop-menu"
        >
          <nav className="software-development-links">
            <Link
              to="/software-development"
              className="software-development-text"
            >
              Software Development
            </Link>
            <Link to="/outsourcing" className="software-development-navlink01">
              Outsourcing
            </Link>
            <Link to="/ui-ux-design" className="software-development-navlink02">
              UI &amp; UX Design
            </Link>
            <Link to="/consulting" className="software-development-navlink03">
              Consulting
            </Link>
          </nav>
          <Link to="/" className="software-development-navlink04">
            <div className="software-development-buttons">
              <svg
                viewBox="0 0 1024 1024"
                className="software-development-icon"
              >
                <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
              </svg>
            </div>
          </Link>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="software-development-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="software-development-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="software-development-mobile-menu"
        >
          <div className="software-development-sidebar">
            <nav className="software-development-nav">
              <img
                alt="image"
                src="/icon-1500h.png"
                className="software-development-image1"
              />
              <span className="software-development-text01">
                Software Development
              </span>
              <span className="software-development-text02">Outsourcing</span>
              <span className="software-development-text03">
                UI &amp; UX Design
              </span>
              <span className="software-development-text04">Consulting</span>
              <span>Partnership</span>
            </nav>
            <span className="software-development-text06">Partnership</span>
          </div>
          <svg viewBox="0 0 1024 1024" className="software-development-icon04">
            <path d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path>
          </svg>
        </div>
      </header>
      <div className="software-development-hero">
        <div className="software-development-container1">
          <h1 className="software-development-text07">Software Development</h1>
          <span className="software-development-text08">
            <span className="software-development-text09">
              Let us handle the software development. Our team of specialists
              offer complete services such as front-end and back-end creation,
              database combination and hosting. We bring effective and
              trustworthy solutions tailored to your business requirements
            </span>
            <span className="software-development-text10">.</span>
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
      <div className="software-development-banner">
        <h1 className="software-development-text13">
          <br></br>
          <span>Software Development:</span>
          <br></br>
          <span> Driving Your Business Forward or Holding You Back?</span>
        </h1>
        <span className="software-development-text18">
          It is essential to your business that software development be done
          correctly; having the inadequate tools would cause your team to not
          work at their peak, and customers may not be pleased with what you are
          delivering. Although cutting corners in terms of software production
          may superficially seem like it will save money, this gamble can pose a
          significant threat if taken. Our company specializes in utilizing
          modern technology as well as positive methods when engineering
          applications so that they move your corporation ahead instead of being
          an obstacle.
        </span>
      </div>
      <div className="software-development-features">
        <div className="software-development-container2">
          <FeatureCard2
            title="Web"
            image_src="/web.svg"
            description="We specialize in web development to assist businesses with creating and expanding their online presence. Our proficient team implements cutting-edge tools to build user-friendly, attractive websites. We can tailor our services according to the individual needs of clients, whether they require custom development or a website based on CMS platforms; ultimately delivering tailored solutions that promote brand identity and result in increased conversions."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Mobile"
            image_src="/mobile.svg"
            description="We work to create iOS and Android apps for businesses of all sizes and industries, using the most up-to-date tools and technologies. We manage every step from start to finish - from conceptualizing through deploying and supporting - with a priority on functionality as well as ease of use in order to meet or surpass client aspirations, boosting involvement, conversions, and income."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="Desktop"
            image_src="/desktop.svg"
            description="We leverage cutting-edge technologies to craft desktop applications that are dependable, easy-to-use and scalable. We specialize in bespoke software solutions that cater to your unique requirements. Furthermore, we work closely with clients to comprehend their workflows and resolve any challenges they face - enhancing operational efficiency while increasing output. Whether it's multi-platform apps or Windows-only systems you need, our enterprise can realize your vision!"
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="Cloud"
            image_src="/cloud.svg"
            description="We specialize in developing custom software applications that focus on safety, scalability and dependability. We utilize cloud-based platforms such as Amazon Web Services, Microsoft Azure or Google Cloud to meet the individual needs and expectations of our clients. Further, we provide ongoing maintenance assistance so their products function optimally at all times. You can trust us with your complete cycle of software development from start to finish!"
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <footer className="software-development-footer">
        <div className="software-development-container3">
          <Link to="/" className="software-development-navlink05">
            <img
              alt="logo"
              src="/icon-1500h.png"
              className="software-development-image2"
            />
          </Link>
          <nav className="software-development-nav1">
            <Link
              to="/software-development"
              className="software-development-navlink06"
            >
                  Software Development
            </Link>
            <Link to="/outsourcing" className="software-development-navlink07">
              Outsourcing
            </Link>
            <Link to="/ui-ux-design" className="software-development-navlink08">
              UI &amp; UX Design
            </Link>
            <Link to="/consulting" className="software-development-navlink09">
              Consulting
            </Link>
          </nav>
        </div>
        <div className="software-development-separator"></div>
        <div className="software-development-container4">
          <span className="software-development-text19">
            © 2017 Target Online Pty Ltd, All Rights Reserved.
          </span>
          <div className="software-development-container5">
            <div className="software-development-container6">
              <svg
                viewBox="0 0 1024 1024"
                className="software-development-icon06"
              >
                <path d="M873 148.8c-95.8-96-223.2-148.8-359-148.8-279.6 0-507.2 227.6-507.2 507.4 0 89.4 23.4 176.8 67.8 253.6l-72 263 269-70.6c74.2 40.4 157.6 61.8 242.4 61.8h0.2c0 0 0 0 0 0 279.6 0 507.4-227.6 507.4-507.4 0-135.6-52.8-263-148.6-359zM514.2 929.6v0c-75.8 0-150-20.4-214.8-58.8l-15.4-9.2-159.6 41.8 42.6-155.6-10-16c-42.4-67-64.6-144.6-64.6-224.4 0-232.6 189.2-421.8 422-421.8 112.6 0 218.6 44 298.2 123.6 79.6 79.8 123.4 185.6 123.4 298.4-0.2 232.8-189.4 422-421.8 422zM745.4 613.6c-12.6-6.4-75-37-86.6-41.2s-20-6.4-28.6 6.4c-8.4 12.6-32.8 41.2-40.2 49.8-7.4 8.4-14.8 9.6-27.4 3.2s-53.6-19.8-102-63c-37.6-33.6-63.2-75.2-70.6-87.8s-0.8-19.6 5.6-25.8c5.8-5.6 12.6-14.8 19-22.2s8.4-12.6 12.6-21.2c4.2-8.4 2.2-15.8-1-22.2s-28.6-68.8-39-94.2c-10.2-24.8-20.8-21.4-28.6-21.8-7.4-0.4-15.8-0.4-24.2-0.4s-22.2 3.2-33.8 15.8c-11.6 12.6-44.4 43.4-44.4 105.8s45.4 122.6 51.8 131.2c6.4 8.4 89.4 136.6 216.6 191.4 30.2 13 53.8 20.8 72.2 26.8 30.4 9.6 58 8.2 79.8 5 24.4-3.6 75-30.6 85.6-60.2s10.6-55 7.4-60.2c-3-5.6-11.4-8.8-24.2-15.2z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="software-development-icon08"
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

export default SoftwareDevelopment
