
import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../Shared/Components/header'
import './HomePage.css'

const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Beta</title>
        <meta property="og:title" content="Beta" />
      </Helmet>
      <Header></Header>
      <div className="home-gallery"></div>
      <div className="home-hero">
        <h1 className="home-text">Smart Shoe Service</h1>
        <span className="home-text01">
          At Smart Shoe Service, we understand that your footwear is more than
          just an accessory – it&apos;s a reflection of your personality and
          style. Whether it&apos;s your favorite sneakers, elegant dress shoes,
          or trendy boots, we&apos;re here to breathe new life into your
          footwear, one clean step at a time.
        </span>
        <div className="home-btn-group">
          <button className="home-button button">Get Started</button>
          <button className="home-button1 button">Learn More</button>
        </div>
      </div>
      <div className="home-banner">
        <h1 className="home-text02">Our Mission</h1>
        <span className="home-text03">
          In every shoe we clean and every customer we serve, our mission is to
          go beyond cleaning shoes – we aim to rejuvenate, empower, and inspire.
          By choosing Smart Shoe Service, you&apos;re not just getting a
          service; you&apos;re becoming a part of a mission to elevate footwear
          care, one step at a time. Thank you for joining us on this journey.
        </span>
      </div>
      <div className="home-steps">
        <h1 className="home-text04">
          <span>Discover Our Process</span>
        </h1>
        <span className="home-text06">
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <br></br>
          <span></span>
        </span>
        <div className="home-container01">
          <div className="home-step">
            <div className="home-container02">
              <div className="home-line"></div>
              <div className="home-container03">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
                </svg>
              </div>
              <div className="home-line1"></div>
            </div>
            <div className="home-container04">
              <h1 className="home-text09">Order Your Sneakers</h1>
              <span className="home-text10">
                <span>
                  Visit our webpage, select your service, and schedule a pickup.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-step1">
            <div className="home-container05">
              <div className="home-line2"></div>
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M512 384q52 0 90 38t38 90-38 90-90 38-90-38-38-90 38-90 90-38zM512 726q88 0 151-63t63-151-63-151-151-63-151 63-63 151 63 151 151 63zM512 192q158 0 286 88t184 232q-56 144-184 232t-286 88-286-88-184-232q56-144 184-232t286-88z"></path>
                </svg>
              </div>
              <div className="home-line3"></div>
            </div>
            <div className="home-container07">
              <h1 className="home-text13">Pickup and Inspection</h1>
              <span className="home-text14">
                Our team collects your sneakers, inspects them for care needs.
              </span>
            </div>
          </div>
          <div className="home-step2">
            <div className="home-container08">
              <div className="home-line4"></div>
              <div className="home-container09">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M792 598q18 0 18-18 0-14-10-18l-288-128-288 128q-10 4-10 16 0 20 18 20h66v-44h428v44h66zM834 484q62 26 62 94v2q0 44-30 73t-74 29h-66v256h-428v-256h-66q-44 0-74-29t-30-73v-2q0-66 62-92l280-126v-26q-44-16-68-57t-16-89q8-38 36-65t66-35q60-10 106 28t46 98h-86q0-18-12-31t-30-13-30 13-12 31 12 30 30 12 30 12 12 30v62z"></path>
                </svg>
              </div>
              <div className="home-line5"></div>
            </div>
            <div className="home-container10">
              <h1 className="home-text15">Expert Cleaning and Restoration</h1>
              <span className="home-text16">
                <span>
                  We thoroughly clean and restore your sneakers with
                  eco-friendly products.
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-step3">
            <div className="home-container11">
              <div className="home-line6"></div>
              <div className="home-container12">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M426 426h172q0-34-26-59t-60-25-60 25-26 59zM810 396l128 116h-128v342h-212v-256h-172v256h-212v-342h-128l426-384 170 154v-112h128v226z"></path>
                </svg>
              </div>
              <div className="home-line7"></div>
            </div>
            <div className="home-container13">
              <h1 className="home-text19">Hassle-Free Delivery</h1>
              <span className="home-text20">
                <span>
                  We deliver your refreshed sneakers to your doorstep as
                  scheduled.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-social-bar">
        <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
          <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
          <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
        </svg>
        <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
          <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
        </svg>
        <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
          <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon16">
          <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
        </svg>
      </div>
    </div>
  )
}

export default Home
