import React from 'react'
import story from '../images/story.png'
import goal from '../images/goal.png'
import target from '../images/target.png'
import aboutimg from '../images/about_img.png'
import Project from './Project';

function About() {
  return (
    <section id='about'>
      <div className='section_pad' >
        <div className="container">
          <div className="row">
            <div className="col about_content text-center">
              <h2>WELCOME to Scriptoptim Infotech</h2>
              <div className='bottom_line mx-auto'></div>
              <p className='col-lg-8 col-sm-10 col-12 mx-auto mb-5'>Since our beginning, We successfully Completed the top-notch android and web application with better expertise and understanding and deliver it to our client. You ask why we are the best web development company in India, we have many reasons to quote</p>
            </div>
          </div>
          <div className='row'>
            <div className="col-md-4 col-12 mb-5">
              <div className="about_box text-center" data-aos="fade-up">
                <img src={story} alt="story" />
                <h4>Story & History</h4>
                <p>Since 2017, we have been helping our clients grow through our unparalleled services. We work shoulder to shoulder with our clients so that we can build creative and strategic solutions to their challenges.</p>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-5">
              <div className="about_box text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={goal} alt="goal" />
                <h4>Goal & Mission</h4>
                <p>Scriptoptim offers a comprehensive approach with the speed and agility you need to propel your business forward. Our research-based strategy means we kickoff our work with you by immersing ourselves in your vision and your culture.</p>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-5">
              <div className="about_box text-center" data-aos="fade-up" data-aos-delay="400">
                <img src={target} alt="target" />
                <h4>Target & Success</h4>
                <p>Since 2017, we have been helping our clients grow through our unparalleled services. We work shoulder to shoulder with our clients so that we can build creative and strategic solutions to their challenges.</p>
              </div>
            </div>
          </div>
          <div className="row  align-items-center">
            <div className="col-md-6 mb-md-0 mb-5">
              <img src={aboutimg} alt="aboutimg" />
            </div>
            <div className="col-md-6 overflow-hidden">
              <div className="box_line" data-aos="fade-left">
                <p className='box-title'>High Quality</p>
                <p className='box-cont'>Quality is the key for any product to drive more user to the product</p>
              </div>
              <div className="box_line sec_color" data-aos="fade-left" data-aos-delay="200">
                <p className='box-title'>Low Cost</p>
                <p className='box-cont'>Cost is important factor of project's success</p>
              </div>
              <div className="box_line" data-aos="fade-left" data-aos-delay="400">
                <p className='box-title'>Complete Business Solutions</p>
                <p className='box-cont'>We have all kind of software solution for your bussiness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Project />
    </section>
  )
}

export default About